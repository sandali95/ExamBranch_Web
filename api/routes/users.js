const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');

const router = express.Router();


//user register
router.post('/register',(req,res)=>{
    User.findEmail(req.body.email,(err,data)=>{
        if(data.length >=1){
            return res.status(402).json({
                message : "Email address is already in use"
            });
        }
    })

    bcrypt.hash(req.body.password , 10 ,(err,hash)=>{
        if(err) {
            return res.status(500).json(
                {error : err}
            )
        }else{
            let newUser = {
                email : req.body.email,
                password : hash
            }
            User.addUser(newUser,(err,data)=>{
                if(err){
                    res.status(500).json({
                        success : false,
                        msg : err,
                        user : newUser
                    });
                  }else{
                    res.status(201).json({
                        success : true,
                        msg : "Created a new User",
                        user : data
                    });
                  }
            });
        }
    });
});



//user authentication without bcrypt
router.post('/login', (req,res)=>{
    User.findEmail(req.body.email, (err,user)=>{
        if(user.length<1){
            return res.json({
                success : false,
                message : 'No user exists for the Email'
            });
        }else{
            bcrypt.compare(req.body.password , user[0].password,(err,result)=>{
                if(err) throw err ;
                const token = jwt.sign({
                    email  : user[0].email,
                    userId : user[0]._id
                },
                config.secret,
                {expiresIn : '1h'});

                if(result){
                    return res.status(200).json({
                        success : true,
                        message : 'Authentication successful',
                        token   : `Bearer ${token}`,
                        user    : {
                            username : user[0].username,
                            email    : user[0].email
                        }
                    });
                }else{
                    return res.json({
                        success: false,
                        message: 'Authentication Unsuccessful'
                    });
                }
            });
        }
    });
});

//user profile data
router.get('/authentication', verifyToken, (req,res)=>{
    jwt.verify(req.token, config.secret, (err,authData)=>{
        if(err) {
            res.status(403).json({
                success : false,
                message : 'Unauthorizad',
            });
        }else{
            res.status(200).json({
                success : true,
                message : 'Authorizad',
                authData: authData,
            });
        }
    });
});

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
}

module.exports = router ;
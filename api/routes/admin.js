const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/database');

const router = express.Router();


//user authentication without bcrypt
router.post('/login', (req, res) => {
    User.findEmail(req.body.email, (err, user) => {
        if (user.length < 1) {
            return res.json({
                success: false,
                message: 'No user exists for the Registration No'
            });
        } else {
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) throw err;
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                },
                    config.secret,
                    { expiresIn: '1h' });

                if (result) {
                    return res.status(200).json({
                        success: true,
                        message: 'Authentication successful',
                        token: `Admin ${token}`,
                        user: {
                            username: user[0].username,
                            email: user[0].email
                        }
                    });
                } else {
                    return res.json({
                        success: false,
                        message: 'Authentication Unsuccessful'
                    });
                }
            });
        }
    });
});
module.exports = router;
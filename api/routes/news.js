const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const newsItem = require('../models/newsItem');
const config = require('../config/database');

const router = express.Router();

//insert news to the database
router.post('/savenews', (req,res)=>{
    let news = {
        title : req.body.title,
        content : req.body.content,
        student : req.body.student//whether undergraduate or postgrdauate related exam    
    }
    console.log(req.body.title);

    newsItem.saveNews(news, (err,data)=>{
        if(err){
            res.status(500).json({
                success : false,
                message : err,
            });
        }else{
            res.status(201).json({
                success : true,
                message : 'News Item is Saved',
                news    : data
            });
        }
    });
});

//get All news
router.get('/allnews', (req,res) =>{
    newsItem.getAllNews( (error,data) =>{
        if(error){
            res.status(500).json({
                success : false,
                message : err,
            });
        }else{
            res.status(200).json({
                success : true,
                message : 'All news received',
                news    : data
            }); 
        }
    });
});

//update news

router.post('/updatenews', (req,res)=>{
    console.log(req.body);
    let news = {
        _id : req.body._id,
        title : req.body.title,
        content : req.body.content,
        student : req.body.student//whether undergraduate or postgrdauate related exam    
    }
    
    newsItem.updateNews(news, (error,data)=>{
        if(error){
            res.status(500).json({
                success : false,
                message : err,
            });
        }else{
            res.status(200).json({
                success : true,
                message : 'News item updated',
                news    : data
            }); 
        }
    });
});

router.get('/deletenews/:id', (req,res)=>{
    let id = req.params.id;
    console.log(id);
    newsItem.deleteNews(id, (error,data)=>{
        if(error){
            res.status(500).json({
                success : false,
                message : err,
            });
        }else{
            res.status(200).json({
                success : true,
                message : 'News item deleted',
            }); 
        }
    });
});

module.exports = router
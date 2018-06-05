const express = require('express');
const mongoose = require('mongoose');

const newsItem = require('../models/newsItem');

const router = express.Router();

//insert news to the database
router.post('/savenews', (req,res)=>{
    let news = {
        exam_id : req.body.examid,
        title   : req.body.title,
        content : req.body.content,
        student : req.body.studenttype//whether undergraduate or postgrdauate related exam    
    }

    newsItem.saveNews(news, (err,data)=>{
        if(err){
            res.json({
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
        exam_id : req.body.exam_id,
        studentType : req.body.student,//whether undergraduate or postgrdauate related exam 
        title : req.body.title,
        content : req.body.content   
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
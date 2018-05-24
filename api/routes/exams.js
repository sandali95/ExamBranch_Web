const express = require('express');
const mongoose = require('mongoose');

const Exam = require('../models/exam');

const router = express.Router();

//add new exam shedule
router.post('/save', (req,res)=>{
    let exam = {
        exam : req.body.exam,
        date : req.body.date,
        subjects : req.body.subjects
    }

    Exam.addExam(exam, (error,data)=>{
        if(error){
            res.status(500).json({
                success : false,
                message : error,
            });
        }else{
            res.status(201).json({
                success : true,
                message : 'Exam is Saved',
            });
        }
    });

});

//register to the exams
router.post('/register', (req,res)=>{
    let exam_id = req.body.id;
    let student = {
        indexno : req.body.indexno,
        registration : req.body.registration,
        fullname : req.body.fullname,
        year : req.body.year,
        subjects : req.body.subjects
    }

    Exam.updateExam(exam_id,student, (error,data)=>{
        if(error){
            res.status(500).json({
                success : false,
                message : error,
            });
        }else{
            res.status(201).json({
                success : true,
                message : 'Student is registered',
            });
        }
    })
});

//get all the registations for a given exam id
router.get('/getstudents/:examid', (req,res)=>{
    let id = req.params.exam_id;
    Exam.findRegistrations(id, (error,data)=>{
        if(error){
            res.status(500).json({
                success : false,
                message : error,
            });
        }else{
            res.status(201).json({
                success : true,
                message : 'All Student Registered',
                data : data//getting all the data
            });
        }  
    })
})
module.exports = router;
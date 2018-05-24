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

router.post('/test',(req,res)=>{
    let student ={
        indexno : 'Number',
        registration : 'String',
        fullname : 'String',
        email : 'String',
        year : 'Number',
        subjects : ['new sub']};
    Exam.update(
        {_id:req.body.id},
        {$push:{'registrations':student}},
        (err,data)=>{
            if(err) throw err;
            res.json({data});
        }
    )

    
});
module.exports = router;
const express = require('express');
const mongoose = require('mongoose');

const Exam = require('../models/exam');

const router = express.Router();

//add new exam shedule
router.post('/save', (req, res) => {
    let exam = {
        //exam_id : req.body.news_id,
        exam: req.body.exam,
        date: req.body.date,
        subjects: req.body.subjects
    }
    console.log(exam);

    Exam.addExam(exam, (error, data) => {
        if (error) {
            res.json({
                success: false,
                message: error,
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Exam is Saved',
            });
        }
    });

});

//register to the exams
router.post('/register', (req, res) => {
    let exam_id = req.body.id;
    let student = {
        indexno: req.body.indexno,
        registration: req.body.registration,
        fullname: req.body.fullname,
        email: req.body.email,
        year: req.body.year,
        subjects: req.body.subjects
    }

    Exam.updateExam(exam_id, student, (error, data) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: error,
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Student is registered',
            });
        }
    })
});

//get all the registations for a given exam id
router.get('/getstudents/:examid', (req, res) => {
    let id = req.params.exam_id;
    Exam.findRegistrations(id, (error, data) => {
        if (error) {
            res.status(500).json({
                success: false,
                message: error,
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'All Student Registered',
                data: data//getting all the data
            });
        }
    })
});


//get the subjects for a particular exam
router.get('/getexamdetails', (req, res) => {
    let id = req.query.examid;
    Exam.findExam(id, (error, data) => {
        if (error) {
            res.json({
                success: false,
                message: error,
            });
        } else {
            res.json({
                success: true,
                message: 'Exam details received',
                //data : data
                exam_id: data[0]._id,
                year1: data[0].subjects.year1,
                year2: data[0].subjects.year2,
                year3: data[0].subjects.year3,
                year4: data[0].subjects.year4,
                year3_optional: data[0].subjects.year3_optional,
                year4_optional: data[0].subjects.year4_optional
                //exam details
            });
        }
    })
});

//get all the valid exams and ids
router.get('/getallexams', (req, res) => {
    Exam.getAll((error, data) => {
        if (error) {
            res.json({
                success: false,
                message: error,
            });
        }else{
            res.json({
                success: true,
                data: data
            });
        }
    });
});
module.exports = router;
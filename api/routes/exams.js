const express = require('express');

const Exam = require('../models/exam');
const Student = require('../models/user');

const router = express.Router();

//add new exam shedule
router.post('/save', (req, res) => {
    let exam = {
        //exam_id : req.body.news_id,
        exam: req.body.exam,
        date: req.body.date,
        subjects: req.body.subjects
    }

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

//register to exams
router.post('/register', (req, res) => {
    let exam_id = req.body.id;
    let student_id = req.body.userid;
    let student = {
        indexno : req.body.indexno,
        registration: req.body.registration,
        fullname: req.body.fullname,
        email   : req.body.email,
        year    : req.body.year,
        subjects: req.body.subjects
    }

    let exam = {
        examid : req.body.id,
        exam   : req.body.exam,
        date   : req.body.date ,
        subjects : req.body.subjects
    }
    
    if(req.body.type == 'undergraduate'){
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
        });
    }else{//repeat exam registration
        Exam.updateRepeatExam(exam_id, student, (error, data) => {
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
        });
    }
    

    Student.addExam(student_id, exam, (error,data)=>{
        if (error) {
            console.log(error)
        } else {
            console.log('successful');
        }
    });
});

//get all the registations for a given exam id
router.get('/getstudents', (req, res) => {
    let year1 = []; let year2 = []; let year3 = []; let year4 = [];
    let id = req.query.examid;
    console.log(id);
    Exam.findRegistration(id, (error, data) => {
        if (error) {
            console.log('error');
        } else {
            res.send(data);
        //    data.forEach(element => {
        //        (element.registrations).forEach(ele => {
        //         if(ele.year == 1){
        //             year1.push(ele);
        //         }else if(ele.year == 2){
        //             year2.push(ele);
        //         }else if(ele.year == 3 ){
        //             year3.push(ele);
        //         }else{
        //             year4.push(ele);
        //         }
        //        });
        //    });
        //    res.json({
        //        1 : year1,
        //        2: year2,
        //        3 : year3,
        //        4 : year4
        //    })
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
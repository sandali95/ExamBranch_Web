const express = require('express');
const mongoose = require('mongoose');

const Student = require('../models/student');

const router = express.Router();


//add new Student
router.post('/save', (req, res) => {
    let student = {
        indexNo : req.body.indexno,
        registrationNo : req.body.registrationno,
        field : req.body.field,
    }

    Student.addStudent(student, (error, data) => {
        if (error) {
            res.json({
                success: false,
                message: error,
            });
        } else {
            res.status(201).json({
                success: true,
                message: 'Student is Saved',
            });
        }
    });

});


module.exports = router;
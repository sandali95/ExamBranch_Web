const mongoose = require('mongoose');

const ExamSchema = mongoose.Schema({
    examid : {
        type : String,
        required : true,
    },
    exam : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    subjects : {
        type :[],
        required : true,
    }
});

const StudentSchema = mongoose.Schema({
    indexNo : {
        type : String,
        required : true,
    },
    registrationNo : {
        type : String,
        required : true,
    },
    field : {
        type : String,
        required : true,
    },
    registrations : {
        type : [ExamSchema],
        required : false,
    }
});

const Student = module.exports = mongoose.model('Student',StudentSchema);

//add new students to the system
module.exports.addStudent = (student,callback)=>{
    Student.create(student, callback);
}

//add exam registrations to the student schema
module.exports.addExam = (student_id,exam,callback)=>{
    Student.update(
        {_id : student_id},
        {$push:{'registrations':exam}},
        callback
    );
}


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

const userSchema = mongoose.Schema({
    indexNo : {
        type : String,
        required : true,
    },
    registrationNo : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    email : {
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

const User = module.exports = mongoose.model('users', userSchema);

//find user by email
module.exports.findRegNo = (regno,callback)=>{
    User.find({registrationNo:regno},callback);
}

module.exports.addUser = (newUser,callback)=>{
   User.create(newUser,callback);
}

//get the registered exams for a given _id
module.exports.getRegisteredExams = (_id,callback)=>{
    User.find({_id : _id},{_id:0,registrations:1},callback)
}

module.exports.addExam = (student_id,exam,callback)=>{
    User.update(
        {_id : student_id},
        {$push:{'registrations':exam}},
        callback
    );
}

const mongoose = require('mongoose');

const yearSchema = mongoose.Schema({
    is : {
        type : [],
        required  : true
    },
    cs : {
        type : [],
        required  : true
    },
    se : {
        type : [],
        required : true
    },
    optional : {
        type : [],
        required : false
    }
});

const SubjectSchema = mongoose.Schema({
    year1 : {
        type : yearSchema,
        required : true,
    },
    year2 :{
        type : yearSchema,
        required : true,
    },
    year3 : {
        type : yearSchema,
        required : true,
    },
    year4 : {
        type : yearSchema,
        required : true,
    },
    
});

const StudentSchema = mongoose.Schema({
    indexno : Number,
    registration : String,
    fullname : String,
    email : String,
    year : Number,
    subjects : []
});

const ExamSchema = mongoose.Schema({
    exam : {
        type : String,
        required : true,
    },
    date : {
        type : String,
        required : true,
    },
    subjects : {
        type : SubjectSchema,
        required : true,
    },
    registrations : {
        type      : [StudentSchema],
        required  :false,
    },
    repeat_registrations : {
        type      : [StudentSchema],
        required  : false
    }

});

const Exam = module.exports = mongoose.model('exams',ExamSchema);

//getAllExams - only the exam name and its ID
module.exports.getAll = (callback)=>{
    Exam.find({},{exam:1},callback);
}

module.exports.addExam = (exam,callback)=>{
   Exam.create(exam,callback);
}

//register students to the exam
module.exports.updateExam = (exam_id,student,callback)=>{
    let _id = exam_id;
    Exam.update(
        {_id:_id},
        {$push:{'registrations':student}},
        callback
    );
}

module.exports.updateRepeatExam = (exam_id,student,callback)=>{
    let _id = exam_id;
    Exam.update(
        {_id:_id},
        {$push:{'repeat_registrations':student}},
        callback
    );
}

module.exports.findRegistration = (id,callback)=> {
    Exam.findById(id,{registrations:1,repeat_registrations:1,_id:0},callback);
}

module.exports.findExam = (id,callback)=> {
    Exam.find({_id:id}, callback);
}

module.exports.getAll = (callback)=> {
    Exam.find(callback);
}
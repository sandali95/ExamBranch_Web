const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
    year1 : {
        type : [],
        required : true,
    },
    year2 :{
        type : [],
        required : true,
    },
    year3 : {
        type : [],
        required : true,
    },
    year3_optional : {
        type : [],
        required : true,
    },
    year4 : {
        type : [],
        required : true,
    },
    year4_optional : {
        type : [],
        required : true,
    }
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
        type : [StudentSchema],
        required :false,
    },

});

const Exam = module.exports = mongoose.model('exams',ExamSchema);

module.exports.addExam = (exam,callback)=>{
   Exam.create(exam,callback);
}

module.exports.updateExam = (exam_id,student,callback)=>{
    let _id = exam_id;
    Exam.update(
        {_id:_id},
        {$push:{'registrations':student}},
        callback
    );
}

module.exports.findRegistration = (id,callback)=>{
    Exam.findById(id,callback);
}

module.exports.findExam = (id,callback)=>{
    Exam.find({_id:id}, callback);
}
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

const subjects = module.exports = SubjectSchema;
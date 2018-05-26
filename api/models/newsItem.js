const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    exam_id : {
        required : true,
        type     : String,
    },
    title   : {
        required : true,
        type     : String,
    },
    content    : {
        required : true,
        type     : String
    },
    student : {
        required : true,
        type     : String
    }
});

const newsItem = module.exports = mongoose.model('news', newsSchema);

module.exports.saveNews = (news, callback) =>{
    newsItem.create(news,callback);
}

module.exports.getAllNews = (callback) =>{
    newsItem.find(callback);
}

module.exports.updateNews = (news,callback) =>{
    let id = news._id;
    newsItem.findByIdAndUpdate(id,news,callback);
}

module.exports.deleteNews = (id,callback) =>{
    console.log(id);
    newsItem.findByIdAndRemove(id, callback);
}

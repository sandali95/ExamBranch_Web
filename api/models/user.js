const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
});

const User = module.exports = mongoose.model('users', userSchema);

//find user by email
module.exports.findEmail = (email,callback)=>{
    User.find({email:email},callback);
}

module.exports.addUser = (newUser,callback)=>{
   User.create(newUser,callback);
}

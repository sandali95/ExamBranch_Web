const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const config = require('./config/database');
const userRoutes = require('./routes/users');
const newsRoutes = require('./routes/news');
const examRoutes = require('./routes/exams');
const studentRoutes = require('./routes/students');
const adminRoutes = require('./routes/admin');
const app = express();

//Init database connection
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database : '+config.database);
});

mongoose.connection.on('error', (err)=>{
    console.log('Database Error : '+err);
});

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json());

//CORS middleware
app.use(cors());

//Items for newsfeed - Home routes
app.use('/',newsRoutes);

//User authentication routes
app.use('/users',userRoutes);

//Exam routes
app.use('/exams',examRoutes);

//Student routes
app.use('/students',studentRoutes);

//Admin Routes
app.use('/admin', adminRoutes);



module.exports = app ;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');


const config = require('./config/database');
const userRoutes = require('./routes/users');
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

//parse application/json
app.use(bodyParser.json());

//CORS middleware
app.use(cors());

//Home route
app.get('/', (req, res)=>{
    res.send('Dashbord');
});

app.post('/', (req, res)=>{
    res.send('post');
});


//User authentication routes
app.use('/users',userRoutes);

module.exports = app ;
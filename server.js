const express = require('express')
const app = express();
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
const UserRoute = require('./app/routes/User.js')



mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.use('/user', UserRoute)
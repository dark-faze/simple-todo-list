const mongoose = require('mongoose'); //require the lib

mongoose.connect('mongodb://localhost/tasks_db'); // connect the db

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connection to db')); //checking if the connection is successfull

db.once('open',()=>{
    console.log('Connected to db'); // if it was successful .
});
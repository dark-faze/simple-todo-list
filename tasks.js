const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({   //defining schema
    do:{
        type:String,
        required: true
    },
    desc: {
        type: String,
        requrired: true
    }
})

const Tasks = mongoose.model('Tasks',tasksSchema); //exporting schema to database

module.exports = Tasks;
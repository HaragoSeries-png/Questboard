const mongoose = require('mongoose');

const Quest = mongoose.model(
    'Quest',
    new mongoose.Schema({
        helper:String,
        questname:String,
        category:String,
        questdetail:String,
        objective:String,
        reward:String,
        location:String,
        status:String,
        date:String,
        image:String,
        duedate:String
    })
)
module.exports = Quest
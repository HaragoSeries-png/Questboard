const mongoose = require('mongoose');

const Quest = mongoose.model(
    'Quest',
    new mongoose.Schema({
        helper:String,
        helperID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        questname:String,
        category:String,
        questdetail:String,
        objective:String,
        reward:String,
        location:String,
        status:String,
        date:String,
        image:String,
        duedate:String,
        contributor:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }],
        numberofcon:Number
    })
)
module.exports = Quest
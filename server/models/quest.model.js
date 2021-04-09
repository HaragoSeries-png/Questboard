const mongoose = require('mongoose');


let QuestSchema = new mongoose.Schema({
    helper:String,
    helperID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    rate:Number,
    tstart:String,
    tend:String,  
    questname:String,
    category:String,
    questdetail:String,
    reward:String,
    status:String,
    date:String,
    rdate:Date,
    image:String,
    duedate:String,
    virginity:Boolean,
    contributor:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    wait:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    numberofcon:Number
})

QuestSchema.methods.remain = async function(){
    console.log("numcon "+this.numberofcon)
    console.log("this.contributor.length "+this.contributor.length)
    let remain = this.numberofcon-this.contributor.length
    console.log(remain)
    return remain
}

const Quest = mongoose.model('Quest',QuestSchema)
module.exports = Quest
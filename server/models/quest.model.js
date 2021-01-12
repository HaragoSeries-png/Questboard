const mongoose = require('mongoose');


let QuestSchema = new mongoose.Schema({
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
    wait:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    numberofcon:Number
})

QuestSchema.methods.remain = async function(){
    console.log("numcon "+this.numberofcon)
    console("this.contributor.length "+this.contributor.length)
    let remain = this.numberofcon-this.contributor.length
    console.log(remain)
    return remain
}

const Quest = mongoose.model('Quest',QuestSchema)
module.exports = Quest
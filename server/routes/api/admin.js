const express = require('express');
const mongodb = require('mongodb'),
  passport = require('passport');
  fs = require('fs')
const Quest = require('../../models/quest.model');
const User = require('../../models/user.model');
const router = express.Router();

router.put('/decide', function (req, res) {
    let questid = req.body.quest_id
    Quest.findById(questid).then(quest => {
      console.log(quest)
      if (req.body.approve) {
        quest.status = 'waiting'
        quest.rate = req.body.rate
        User.findById(quest.helperID).then(user=>{
          let noti = {message:"Approve"}
          user.notify.push(noti)
          user.havenoti = true
        })
      }
      else {
        quest.status = 'reject'
        try{
          fs.unlinkSync('server/public/'+ quest.image)
        }
        catch{
          
        }
        
        Quest.findByIdAndDelete(questid).then(quest => {
          res.send(quest)
        })
      }
      quest.save()
      console.log(quest.status)
      return res.send(quest)
    })
});

router.get('/quest',function(req,res){
  console.log('inn')
  Quest.find({ status: "pending" }).then(quest => {
    console.log(quest)
    res.send({ quests: quest, success: true })
  })
})
module.exports = router
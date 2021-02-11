const express = require('express');
const mongodb = require('mongodb'),
  passport = require('passport');
  
const Quest = require('../../models/quest.model');
const User = require('../../models/user.model');
const router = express.Router();

router.put('/decide', function (req, res) {
    let questid = req.body.quest_id
    Quest.findById(questid).then(quest => {
      console.log(quest)
      if (req.body.approve) {
        quest.status = 'approved'
      }
      else {
        quest.status = 'reject'
      }
      quest.save()
      console.log(quest.status)
      return res.send(quest)
    })
});

router.get('/quest',function(req,res){
  console.log('inn')
  Quest.find({ status: "pending" }).then(quest => {
    res.send({ quests: quest, success: true })
  })
})
module.exports = router
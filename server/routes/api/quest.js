const express = require('express');
const mongodb = require('mongodb'),
      passport = require('passport');
const Quest = require('../../models/quest.model');
const { route } = require('./profile');
const router = require('./profile');
      require('../../configs/passport'),
      User = require('../../models/user.model');
      multer = require('multer'),
      bodyParser = require('body-parser'),
      dateFormat = require("dateformat");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'server/public')
    },
    filename: function (req, file, cb) {
        cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'image/gif') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
const upload = multer({
    storage: storage,
    
    fileFilter: fileFilter
});
router.get('/feed',function(req,res){
  Quest.find({status:"approved"}).then(quest=>{
    res.send({quest:quest,success:true})
  })
})
router.post('/',upload.single('image'),passport.authenticate('pass',{
  session:false
}),function(req,res){
  console.log("filename "+req.file.filename)
  let newquest = {
    helper:req.body.helper,
    helperID:req.user._id,
    questname:req.body.questname,
    category:req.body.category,
    questdetail:req.body.questdetail,
    objective:req.body.objective,
    reward:req.body.reward,
    location:req.body.location,
    status:"wait",
    image:req.file.filename,
    date:dateFormat(new Date(), "longDate"),
    duedate:req.body.duedate,
    numberofcon:req.body.numberofcon,
    wait:[]
  }
  
  Quest.create(newquest).then((quest,err)=>{
    if(err){
      console.log("err "+err)
      return res.send({success:false})
    }
    req.user.quests.push(quest)
    console.log(req.user.quests)
    req.user.save()
    return res.send({success:true,questid:quest._id})
  })
})

router.put('/accept',passport.authenticate('pass',{
  session:false
}),function(req,res){
  console.log(req.body.quest_id)
  let questid = req.body.quest_id
  let adventurer = req.user._id
  Quest.findById(questid).then(quest=>{
    console.log(quest)
    quest.wait.push(adventurer)
    quest.save()
    return res.send(quest)    
  }) 
})

router.put('/decide',function(req,res){
  let questid = req.body.quest_id
  Quest.findById(questid).then(quest=>{
    console.log(quest)
    if(req.body.approve){
      quest.status = 'approved'
    }
    else{
      quest.status = 'reject'
    }
    quest.save()
    return res.send(quest)    
  })
})

router.put('/select',function(req,res){
  let questid = req.body.quest_id
  let contid = req.body.user_id   
  Quest.findById(questid).then(quest=>{
    console.log(quest)
    if(req.body.approve){ 
      quest.wait.pull(contid)
      quest.contributor.push(contid)
    }
    else{
      quest.wait.pull(contid)
    }
    quest.save()
    return res.send(quest)    
  })
})
router.get('/test',function(req,res){
  let questid = req.body.quest_id
  Quest.findById(questid).then(async(quest)=>{
    let remain = await quest.remain()
    console.log(remain)
    return res.send({remain:remain})    
  })
})
router.delete('/',function(req,res){
  console.log(req.body.quest_id)
  Quest.findByIdAndDelete(req.body.quest_id).then(quest=>{
    res.send(quest)
  })
})

module.exports = router;
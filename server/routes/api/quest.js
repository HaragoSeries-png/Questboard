const express = require('express');
const mongodb = require('mongodb'),
      passport = require('passport');
const Quest = require('../../models/quest.model');
const { route } = require('./profile');
const router = require('./profile');
      require('../../configs/passport'),
      User = require('../../models/user.model');
      multer = require('multer'),
      bodyParser = require('body-parser')


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
    res.send(quest)
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
    date:dateFormat(new Date(), "hh:MM  ddmmm "),
    duedate:req.body.duedate,
    numberofcon:req.body.numberofcon
  }
  
  Quest.create(newquest).then((quest,err)=>{
    if(err){
      console.log("err "+err)
      return res.send({success:false})
    }
    req.user.quests.push(quest)
    console.log(req.user.quests)
    req.user.save()
    return res.send({success:true})
  })
})
module.exports = router;
const express = require('express');
const mongodb = require('mongodb'),
  passport = require('passport');
const Quest = require('../../models/quest.model');
const User = require('../../models/user.model');
const router = express.Router();


  
multer = require('multer'),
  bodyParser = require('body-parser'),
  dateFormat = require("dateformat");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limit: 500000,
  fileFilter: fileFilter
});

router.get('/questid/:id', function (req, res) {
  Quest.findById(req.params.id).then(async (quest) => {
    let ownerID = quest.helperID    
    User.findById(ownerID).then(async (owner) => {
      let ownerName = owner.infoma.firstname + " " + owner.infoma.lastname
      let rim = quest.remain()
      let ownerInfo = {ID: ownerID, name: ownerName,remain:rim}     
      return res.send({quest: quest, owner: ownerInfo, success: true})
    })
  })
})

router.get('/feed', function (req, res) {
  let page = Math.max(0, req.query.page)
  let perPage = 12
  let cat = req.query.cat
  var count =0
  var numall  =0
  console.log('count pre  '+count)
  if(cat){
    Quest.find({ status: "waiting",category:cat})
    .then(async quest => {
      numall = quest.length
      count = await Math.ceil(numall/perPage)
      console.log('count cat '+count)
    })
    .then(async q=>{
      if(cat){   
        Quest.find({ status: "waiting",category:cat})
        .limit(perPage)
        .skip(perPage*page)
        .sort({rdate:-1})
        .then(quest => {
          
          res.send({ quest: quest, success: true,pagenum:count })
        })
      }
      else{  
        Quest.find({ status: "waiting"})
        .limit(perPage)
        .skip(perPage*page)
        .sort({rdate:-1})
        .then(quest => {   
          console.log('cou '+count)
          console.log('------------------------------------------')
          res.send({ quest: quest, success: true,pagenum:count })
        })
      }
    })
  }
  else{
    Quest.find({ status: "waiting"})
    .then(async quest => {
      numall = quest.length
      count = await Math.ceil(numall/perPage)
      console.log('count nocat '+count)
    })
    .then(q=>{
      if(cat){   
        Quest.find({ status: "waiting",category:cat})
        .limit(perPage)
        .skip(perPage*page)
        .sort({rdate:-1})
        .then(quest => {
          
          res.send({ quest: quest, success: true,pagenum:count })
        })
      }
      else{  
        Quest.find({ status: "waiting"})
        .limit(perPage)
        .skip(perPage*page)
        .sort({rdate:-1})
        .then(quest => {   
          console.log('cou '+count)
          console.log('------------------------------------------')
          res.send({ quest: quest, success: true,pagenum:count })
        })
      }
    })
  }
 
  
  
})

router.post('/',  passport.authenticate('pass', {
  session: false
}),upload.single('image'), function (req, res) {
  let filename = ''
  if(req.file!=null){
    filename=req.file.filename
  }
  else{
    filename='default.png'
  }
  
  let newquest = {
    helper: req.user.fistname,
    helperID: req.user._id,
    questname: req.body.questname,
    category: req.body.category,
    questdetail: req.body.questdetail,
    objective: req.body.objective,
    reward: req.body.reward,
    location: req.body.location,
    status: "pending",
    image: filename,
    date: dateFormat(new Date(), "longDate"),
    rdate: dateFormat(new Date(), "longDate"),
    duedate: req.body.duedate,
    numberofcon: req.body.numberofcon,
    wait: [],
    contributor:[],
    tstart:req.body.tstart,
    tend:req.body.tend,
    rate:0
  }

  Quest.create(newquest).then((quest, err) => {
    if (err) {
      console.log("err " + err)
      return res.send({ success: false })
    }
    req.user.ownquests.push(quest)
    console.log(req.user.quests)
   
    req.user.save()
    return res.send({ success: true, questid: quest._id })
  })
})

router.put('/accept', passport.authenticate('pass', {
  session: false
}), function (req, res) {
  console.log(req.body.quest_id)
  let questid = req.body.quest_id
  let adventurer = req.user._id
  console.log("idd "+questid)
  Quest.findById(questid).then(quest => {
    console.log(quest)
    quest.wait.push(adventurer)
  
    quest.save()
    return res.json({success:true})
  })
})


router.put('/select', passport.authenticate('pass', {
  session: false
}), function (req, res) {
  
  let questid = req.body.quest_id
  let contid = req.body.cid
  let approve = req.body.approve
  let detail = contid.map((cid,i)=>{
    let tde = {cid:cid,approve:approve[i]}
    return [tde]
  })
  console.log("idd "+JSON.stringify(detail) )
  Quest.findById(questid).then(quest => {
    
    detail.forEach((de,i) => {  
      console.log(de[i].approve)  
      if (de[i].approve) {
        console.log('iftrue')
        quest.wait.pull(de[i].cid)
        quest.contributor.push(de[i].cid)
        User.findById(de[i].cid).then(user=>{
          user.accquest.push(questid)
          user.save()
        })
      }
      else {
        console.log('iffalse')
        quest.wait.pull(de[i].cid)
      }
      quest.save()
      
    }); 
    return res.send(quest)
  })  
})

router.get('/test', function (req, res) {
  let questid = req.body.quest_id
  Quest.findById(questid).then(async (quest) => {
    let remain = await quest.remain()
    console.log(remain)
    return res.send({ remain: remain })
  })
})

router.delete('/', function (req, res) {
  console.log(req.body.quest_id)
  Quest.findByIdAndDelete(req.body.quest_id).then(quest => {
    res.send(quest)
  })
})



module.exports = router;
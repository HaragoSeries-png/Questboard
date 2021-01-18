const express = require('express');
const { fdatasync } = require('fs');
const mongodb = require('mongodb'),
      passport = require('passport');
      require('../../configs/passport'),
      User = require('../../models/user.model'),
      multer = require('multer'),
      fs = require('fs')
      bodyParser = require('body-parser').json();

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

    fileFilter: fileFilter
});

const router = express.Router();
router.get('/', passport.authenticate('pass', {
    session: false
}), (req, res) => {
    console.log('getprofile')
    res.send({ success: true, user: req.user })
});

router.put('/', upload.single('image'), passport.authenticate('pass', {
    session: false
}), (req, res) => {
    let newdata = req.body
    
    if (newdata.field == 'firstname') {
        console.log('firstname')
        req.user.infoma.firstname = newdata.value
    }
    else if (newdata.field == 'lastname') {
        console.log('lastname')
        req.user.infoma.lastname = newdata.value
    }
    else if (newdata.field == 'address') {
        console.log('address')
        req.user.infoma.address = newdata.value
    }
    else if (newdata.field == 'des') {
        console.log('des')
        req.user.infoma.des = newdata.value
    }
    
    console.log(req.user.infoma.proimage)
    req.user.save()

    res.send(req.user)
});

router.put('/editPic',  passport.authenticate('pass', {
    session: false
}),upload.single('image'), (req, res) => {
    console.log(req.user.infoma.proimage)
    if(req.user.infoma.proimage!=""){
        fs.unlinkSync('server/public/'+ req.user.infoma.proimage)
    }
    req.user.infoma.proimage = req.file.filename
    req.user.save()

    res.send(req.user)
}),

router.put('/list',passport.authenticate('pass',{
    session:false
}),(req,res)=>{
    let data= req.body
    if(data.field==skill){
        if(data.flag==1){
            console.log("let add "+data.value)
            req.user.infoma.skills.push(data.value)    
        }
    }
    else if (data.field == contact) {
        if (data.flag == 1) {

            console.log("let add " + data.skill)
            req.user.infoma.contact.push(data.value)
        }
        else {
            console.log("let add " + data.skill)
            req.user.infoma.contact.pull(data.value)
        }
    }
    else if (data.field == education) {
        if (data.flag == 1) {

            console.log("let add " + data.skill)
            req.user.infoma.education.push(data.value)
        }
        else {
            console.log("let add " + data.skill)
            req.user.infoma.education.pull(data.value)
        }
    }


    req.user.save()
    res.send({ success: true })
})

router.delete('/', function (req, res) {
    console.log(req.body.user_id)
    User.findByIdAndDelete(req.body.user_id).then(quest => {
      res.send(quest)
    })
  })

module.exports = router;
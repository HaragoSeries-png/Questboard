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

router.put('/', passport.authenticate('pass', {
    session: false
}), (req, res) => {
    // let newdata = req.body
    let data = req.body
    let keys = Object.keys(data)

    console.log(typeof req.user.infoma.skill)

    for (var v in keys) {
        if (keys[v] == 'skill') req.user.infoma.skill = data.skill
        if (keys[v] == 'exp') req.user.infoma.exp = data.exp
        if (keys[v] == 'desc') req.user.infoma.desc = data.desc
        if (keys[v] == 'education') req.user.infoma.education = data.education
        if (keys[v] == 'contact') req.user.infoma.contact = data.contact
    }
    
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


module.exports = router;
const express = require('express');
const mongodb = require('mongodb'),
    passport = require('passport');
require('../../configs/passport'),
    User = require('../../models/user.model'),
    multer = require('multer'),
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
    else if (newdata.field == 'image') {
        console.log('edit image')
        req.user.infoma.proimage = req.file.filename
    }
    console.log(req.user.infoma.proimage)
    req.user.save()

    res.send(req.user)
});

router.put('/editPic', upload.single('image'), passport.authenticate('pass', {
    session: false
}), (req, res) => {
    req.user.infoma.proimage = req.file.filename
    req.user.save()

    res.send(req.user)
});

router.put('/list', passport.authenticate('pass', {
    session: false
}), (req, res) => {
    let data = req.body
    if (data.field == skill) {
        if (data.flag == 1) {

            console.log("let add " + data.value)
            req.user.infoma.skills.push(data.value)
        }
        else {
            console.log("let add " + data.skill)
            req.user.infoma.skill.pull(data.value)
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
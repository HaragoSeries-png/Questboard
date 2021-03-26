const express = require('express');
const mongodb = require('mongodb'),
  passport = require('passport');
const Quest = require('../../models/quest.model');
const User = require('../../models/user.model');
const router = express.Router();

router.get('/',passport.authenticate('pass', {
    session: false
}),async function(req,res){
    console.log('noti')
    let user = req.user
    if(user.havenoti){
        console.log('have notiiiiiiiiiiiiiiiiii')
        let notify = user.notify
        user.havenoti = false
        user.save()
        res.send(notify)
    }
    else{
        res.send(false)
    }
})


module.exports = router;
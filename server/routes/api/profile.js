const express = require('express');
const mongodb = require('mongodb'),
      passport = require('passport');
      require('../../configs/passport'),
      User = require('../../models/user.model'),
      bodyParser = require('body-parser').json();

const router = express.Router();
router.get('/',passport.authenticate('pass',{
    session:false
}),(req,res)=>{
   res.send(req.user.infoma)
}),
router.put('/',passport.authenticate('pass',{
    session:false
}),(req,res)=>{
    let newdata = req.body
    req.user.updateOne({$set:{infoma:newdata}},function(err){
        if(err){
            res.send({success:false})
        }
        else{
            res.send({success:true})
        }       
    })    
})

module.exports = router;
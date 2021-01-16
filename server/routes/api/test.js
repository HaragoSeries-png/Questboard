const { query } = require('express');
const express = require('express');
const mongodb = require('mongodb')
      
const router = express.Router();

      
User = require('../../models/user.model'),
multer = require('multer'),
bodyParser = require('body-parser').json();

router.get('/',function(req,res){
    console.log('query = '+req.query.hee)
    res.send('success')
}) 

router.put('/',function(req,res){
    let newdata = req.body
    let test = {[newdata.field]:newdata.value}
    console.log('test'+test)
    res.send(test)
})

module.exports = router;
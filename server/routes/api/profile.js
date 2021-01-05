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
        cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ||file.mimetype === 'image/gif') {
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
router.get('/',passport.authenticate('pass',{
    session:false
}),(req,res)=>{
   
   res.send(req.user.infoma)
}),
router.put('/',upload.single('image'),passport.authenticate('pass',{
    session:false
}),(req,res)=>{
    let newdata = req.body
    console.log("file "+req.file)
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
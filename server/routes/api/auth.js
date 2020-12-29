const express = require('express');
const mongodb = require('mongodb'),
      jwt = require('jsonwebtoken'),
      passport = require('passport');
      require('../../configs/passport'),
      User = require('../../models/user.model'),
      bodyParser = require('body-parser').json();

        
const router = express.Router();

router.post('/signup',async (req, res, next) => {
    passport.authenticate(
      'signup', { session: false },
      async (err,user,info)=>{
        console.log(info.success)
        if(!info.success){
          res.json({
            success:info.success,
            message: 'Signup not suck',
            user: req.user
          })
        }
        else{
          newuser={
            email:req.body.email,
            username:req.body.username,
            lastname:req.body.lastname,
            password:req.body.password
          }
          console.log(newuser)
          User.create(newuser).then(user=>{
            res.json({
              success:true,
              message: 'Signup sucessful ',
              username:user.username
            })
          })
          
        }
      }
    )(req, res, next);
  }    
);

router.post('/login',async (req, res, next) => {
      passport.authenticate(
        'login',
        async (err, user, info) => {
          try {
            if (err || !user) {
                message = info.message
                console.log("have err")
                return res.json({
                    message:message,
                    success: false
                });
            }
  
            req.login(
                user, { session: false },
                async (error) => {
                    if (error) return next(error);
                        const payload = {
                            _id: user._id,
                            email: user.email 
                        };
                        console.log("name "+user.username)
                        const token = jwt.sign(payload, 'TOP_SECRET');        
                        return res.json({ 
                            token :'Bearer '+token ,
                            success : true,
                            username :user.username
                      });
                }
            );
          } catch (error) {
            return next(error);
          }
        }
      )(req, res, next);
    }
);
router.get('/test',passport.authenticate('pass',{
    session:false
}),(req,res)=>{
    return res.json({
        user:"Hee"
    })
})


module.exports = router;
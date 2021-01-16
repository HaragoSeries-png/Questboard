const express = require('express');
const mongodb = require('mongodb'),
  jwt = require('jsonwebtoken'),
  passport = require('passport');
require('../../configs/passport'),
  User = require('../../models/user.model'),
  bodyParser = require('body-parser').json();

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  passport.authenticate(
    'signup', { session: false },
    async (err, user, info) => {
      console.log(info.success)
      if (!info.success) {
        res.json({
          success: info.success,
          message: 'Signup not suck',
          user: req.user
        })
      }
      else {
        newuser = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          verified: false,
          joinDate: Date.now(),
          infoma: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            proimage: "2021-01-06T12-45-36.660Zmiku.gif"
          }
        }
        console.log(newuser)
        User.create(newuser).then(user => {
          res.json({
            success: true,
            message: 'Signup sucessful',
            username: user.username
          })
        })

      }
    }
  )(req, res, next);
}
);

router.post('/login', async (req, res, next) => {
  passport.authenticate(
    'login', { session: false },
    async (err, user, info) => {
      if (err || !user) {
        message = info.message
        console.log("have err")
        res.json({
          message: message,
          success: false
        });
      }
      else {
        const payload = {
          _id: user._id,
          email: user.email
        };
        console.log("name " + user.username)
        const token = jwt.sign(payload, 'TOP_SECRET');
        console.log("token " + token)
        res.json({
          token: 'Bearer ' + token,
          success: true,
          username: user.username,
          fullname: user.infoma.firstname + " " + user.infoma.lastname,
          user: user,
          infoma: user.infoma
        });
      }
    }
  )(req, res, next);
}
);

router.get('/test', passport.authenticate('pass', {
  session: false
}), (req, res) => {
  return res.json({
    user: req.user
  })
})

router.get('/test', passport.authenticate('pass', {
  session: false
}), (req, res) => {
  return res.json({
    user: "Hee"
  })
})

module.exports = router;
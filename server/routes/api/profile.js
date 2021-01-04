const express = require('express');
const mongodb = require('mongodb'),
    passport = require('passport');
require('../../configs/passport'),
    User = require('../../models/user.model'),
    Infoma = require('../../models/infoma.model'),
    bodyParser = require('body-parser').json();

const router = express.Router();

router.post('/', passport.authenticate('pass', {
    session: false
}), (req, res) => {
    Infoma.fin
})

router.get('/', function (req, res) {
    res.sent('OK');
})

module.exports = router;
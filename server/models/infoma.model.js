const mongoose = require('mongoose');

const Infoma = mongoose.model(
    'Infoma',
    new mongoose.Schema({
        skill : []
    })
)

module.exports = Infoma



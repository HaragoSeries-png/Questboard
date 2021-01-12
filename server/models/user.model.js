const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    proimage: String,
    vertifly: Boolean,
    joinDate: Date,
    infoma: {
        firstname: String,
        lastname: String,
        address: String,
        desc: String,
        contact: [{
            con: String,
            val: String
        }],
        skills: [{
            skill: String
        }],
        education: [{
            banch: String,
            date: Date
        }],
    },

    quests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }]
})

UserSchema.pre(
    'save',
    async function (next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;

    const compare = await bcrypt.compare(password, user.password);
    console.log(compare)
    return compare;
}

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema)

module.exports = User


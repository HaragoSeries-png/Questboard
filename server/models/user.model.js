const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    passportLocalMongoose = require('passport-local-mongoose');

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    verified: Boolean,
    joinDate: Date,
    infoma: {
        firstname: String,
        lastname: String,
        address: String,
        rating: Number,
        desc: String,
        proimage: String,
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
        exp: [{
            topic: String,
            desc: String,
            date: Date,
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
};

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema)

module.exports = User


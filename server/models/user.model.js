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
        desc: [{
            topic: String,
            desc: String
        }],
        contact: [{
            con: String,
            val: String
        }],
        skill: [{
            skill: String
        }],
        education: [{
            branch: String,
            date: String
        }],
        exp: [{
            topic: String,
            desc: String,
            date: String,
        }],
    },
    ownquests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }],
    accquest:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quest'
    }],
    comquest:[{
        quest:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Quest' 
        },
        rating:Number
    }]
})

UserSchema.pre(
    'save',
    async function (next) {
        console.log("hree")
        const user = this;
        const hash = await bcrypt.hash(this.password, bcrypt.genSaltSync(12));
        
        this.password = hash;
        next();
    }
);

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    // console.log('passsword in '+password)
    // console.log("password real "+user.password)
    // const compare = await bcrypt.compare(password, user.password);
    // console.log('compare '+compare)
    const hash = await bcrypt.hash(password, bcrypt.genSaltSync(12))
    console.log(hash)
    let compare = await bcrypt.compare(password, user.password)
    console.log("comapre "+compare)
    return compare
};

UserSchema.methods.getrating = async function(){
    let r = await User.aggregate([
        { $match: {_id: this._id} },
        { $addFields: { avgrating: { $avg: "$comquest.rating" } } }
    ]).then(await function(result){
        console.log('lett '+result[0].avgrating)
        return result[0].avgrating
    })
    return r
    
}
UserSchema.methods.changepass = async function(newpass){
    const user = this;
    const hash = await bcrypt.hash(newpass, bcrypt.genSaltSync(12));
    let compare = await bcrypt.compare(newpass, hash)
    console.log("hash here"+compare)
    user.password = hash;
    console.log("newpass "+user.password)

    return this.password
}


UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema)



module.exports = User


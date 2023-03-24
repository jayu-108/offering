const mongoose = require('mongoose')
const {Schema} = mongoose;

const UserSchema = new Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    mobile:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('user', UserSchema);
module.exports = User;
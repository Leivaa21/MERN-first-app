const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: String
}, {
    timestamps:true
})

module.exports = model('User', UserSchema);
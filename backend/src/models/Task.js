const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
    taskName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

module.exports = model('Task', taskSchema);
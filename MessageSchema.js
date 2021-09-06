const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: String,
    name: String,
    date:{  
        type: Date,
       default: Date.now
    }
})

const Message = mongoose.model('Message', MessageSchema);


module.exports = Message;


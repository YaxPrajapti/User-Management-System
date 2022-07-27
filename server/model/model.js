const mongoose  = require('mongoose');


var schema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    }, 
    status: {
        type: String
    }
});


const userdb = mongoose.model('userdb', schema);

module.exports = userdb;
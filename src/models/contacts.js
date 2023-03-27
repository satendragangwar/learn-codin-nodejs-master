const mongoose = require('mongoose');

const contacts = mongoose.Schema({
    name:String,
    email:String,
    phone:String
})


module.exports = mongoose.model("contact" , contacts)
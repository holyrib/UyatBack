var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');;


var Profile = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    place: String,
    imageUrl: String,
    school: String,
    interest : String,
    kalym: String,
    user: String,
});

module.exports = mongoose.model('Profile', Profile);

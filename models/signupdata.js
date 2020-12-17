const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.uhxeb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email:String,
    password:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);


module.exports = Signupdata;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@cluster0.uhxeb.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title:String,
    year:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);


module.exports = Authordata;

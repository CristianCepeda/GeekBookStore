const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
const bookSchema = new Schema({
  title: String,
  author: String
});

//const BookDet = mongoose.model('bookdet', bookSchema);
const BookDet = mongoose.model('book', bookSchema);
module.exports = BookDet;

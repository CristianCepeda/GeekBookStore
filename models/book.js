const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  //create schema and model
const bookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: Schema.ObjectId, ref: 'Author', required: true},
  publisher: String,
  isbn: {type: String, required: true},
  genre: [{type: Schema.ObjectId, ref: 'Genre'}]
});
module.exports = mongoose.model('Book', bookSchema);

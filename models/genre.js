const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  //create schema and model
const GenreSchema = new Schema({
  name: {type: String, enum: ['science fiction', 'mystery', 'fiction', 'non-fiction',
    'fantasy', 'horror', 'thriller', 'romance', 'fairy tale', ], required: true, min: 3, max: 100},
});
module.exports = mongoose.model('Genre', GenreSchema);

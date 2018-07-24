const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

//create schema and model
const authorSchema = new Schema({
  first_name: {type: String, required: true, max: 100},
  last_name: {type: String, required: true, max: 100},
});

//virtual for author's full name
authorSchema
.Virtual('name')
.get(function(){
    return this.last_name + ',' + this.first_name;
});

module.exports = mongoose.model('authors', authorSchema);

var mongoose = require('moongose');
var Schema = mongoose.Schema;

var SignInSchema = new Schema({

});

module.exports = mongoose.model('signin', SignInSchema);

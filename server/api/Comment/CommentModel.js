var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  BookId:{type:String},
  User:{type:String},
  Text:{type:String},
});

CommentSchema.methods = {
  toJson: function(){
    var obj = this.toObject();
    return obj;
  }
};

module.exports = mongoose.model('comment', CommentSchema);

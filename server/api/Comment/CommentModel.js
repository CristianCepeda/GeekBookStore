var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  BookId:{type:String},
  Username:{type:String},
  Text:{type:String},
});

UserSchema.methods = {
  toJson: function(){
    var obj = this.toObject();
    return obj;
  }
};

module.exports = mongoose.model('comment', UserSchema);

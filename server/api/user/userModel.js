var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  logininformation:{type:Schema.Types.ObjectId, ref:'logininfo'}
});

UserSchema.methods = {
  toJson: function(){
    var obj = this.toObject();
    return obj;
  }
};

module.exports = mongoose.model('User', UserSchema);

/*
nickname:{type:String, unique:true},
email:{type:String, unique:true},
address:{type:String},
address2:{type:String},
city:{type:String},
state:{type:String},
zip:{type:String}
*/

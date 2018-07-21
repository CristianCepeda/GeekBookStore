var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname:{type:String, required: true},
  lastname:{type:String, required: true},
  username:{type:String, required: true, unique:true},
  password:{type:String, required: true},
  nickname:{type:String, unique:true},
  email:{type:String, unique:true},
  address:{type:String},
  address2:{type:String},
  city:{type:String},
  statein:{type:String},
  zip:{type:String}
});

UserSchema.methods = {
  toJson: function(){
    var obj = this.toObject();
    return obj;
  }
};

module.exports = mongoose.model('user', UserSchema);

/*
nickname:{type:String, unique:true},
email:{type:String, unique:true},
address:{type:String},
address2:{type:String},
city:{type:String},
state:{type:String},
zip:{type:String}
*/

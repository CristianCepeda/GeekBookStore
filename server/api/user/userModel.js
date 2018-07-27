var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginInfoSchema = new Schema({
  username:{type:String, required: true, unique:true},
  password:{type:String, required: true}
});

// I would say that the correct way to define this schema is to have this instead
// nickname:{type:String, unique:true}
var NicknameInfoSchema = new Schema({
  nickname:{type:String}
});

// I would say that the correct way to define this schema is to have this instead
// email:{type:String, unique:true},
var PersonalInfoSchema = new Schema({
  firstname:{type:String, required: true},
  lastname:{type:String, required: true},
  email:{type:String},
  address:{type:String},
  address2:{type:String},
  city:{type:String},
  statein:{type:String},
  zip:{type:String}
});

var PaymentInfoSchema = new Schema({
  nameoncard: {type:String},
  cardnumber: {type:Number},
  expirydate: {type:String},
  securitycode: {type:Number}
});

var UserSchema = new Schema({
  logininformation: LoginInfoSchema,
  nicknameinformation: NicknameInfoSchema,
  personalinformation: PersonalInfoSchema,
  paymentinformation: [PaymentInfoSchema]
});

UserSchema.methods = {
  toJson: function(){
    var obj = this.toObject();
    return obj;
  }
};

module.exports = mongoose.model('User', UserSchema);

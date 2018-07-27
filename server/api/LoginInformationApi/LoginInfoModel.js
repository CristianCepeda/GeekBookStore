var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginInformationSchema = new Schema({
  user:{type:Schema.Types.ObjectId,ref:'user'},
  username:{type:String, required: true, unique:true},
  password:{type:String, required: true}
});

module.exports = mongoose.model('LoginInfo', LoginInformationSchema);

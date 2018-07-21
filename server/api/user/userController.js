var User = require('./userModel');

exports.postNewUser = function(req,res,next){
  var newUser = new User(req.body);
  // var newUser = new User({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   username: req.body.username,
  //   password: req.body.password
  // });
  newUser.save(function(err,user){
    if(err){return next(err);}
    console.log('you where successful in creating the user');
    res.json(user);
  });
};

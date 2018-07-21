var _ = require('lodash');
var User = require('./userModel');
// IF USER FOUND BY ID THEN ATTACH HIM/HER TO [ req.user ]
exports.params = function(req,res,next,id){
  User.findById(id)
    .then(function (user){
      if (!user){
        next(new Error('No user with that id'));
      } else {
        req.user = user;
        next();
      }
    }, function(err){
      next(err);
    });
};
// GET A JSON RESPONSE WITH ALL THE DATA OF A USER
exports.get_UserData = function(req,res,next) {
  var user = req.user.toJson();
  res.json(user);
  next();
};
// PUT A RESPONSE WITH DATA BACK INTO THE DATABASE FOR THAT SPECIFIC USER.
exports.put_UserLoginInfo = function(req,res,next){
  var user = req.user;
  var update = req.body;

  _.merge(user, update);

  user.save(function (err,saved){
    if(err){
      next(err);
    } else {
      res.json(saved.toJson());
    }
  });
};




/*  ----------------------------------------------------------------------
    | This route is being used by [ http://localhost:8080/auth/signin ]
    | in the create user tab.
    ----------------------------------------------------------------------*/
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

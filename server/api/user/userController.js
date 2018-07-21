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



// POST REQUEST TO CREATE A NEW USER IN THE DATABASE
/*-----------------------------------------------------------------------
 | This route is being used by [ http://localhost:8080/auth/createaccount ]
 | in the create user tab.
 -----------------------------------------------------------------------*/
exports.postNewUser = function(req,res,next){
/*-----------------------------------------------------------------------
 | Since the field names are the same inside the component and in the user
 | model then we can simply just use req.body instead of trying to initialize
 | them indivdually
 -----------------------------------------------------------------------*/
  var newUser = new User(req.body);
  newUser.save(function(err,user){
    if(err){return next(err);}
    console.log('you where successful in creating the user');
    res.json(user);
  });
};
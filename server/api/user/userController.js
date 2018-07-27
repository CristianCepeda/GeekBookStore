var _ = require('lodash');
// Doing this so that we can update LoginInformation
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

// POST REQUEST TO CREATE A NEW USER IN THE DATABASE
/*-----------------------------------------------------------------------
 | This route is being used by [ http://localhost:8080/auth/createaccount ]
 | in the create user tab.
 -----------------------------------------------------------------------*/
exports.post_NewCreateAccountUSER = function(req,res,next){
  var newUser = new User({
    logininformation: {
      username: req.body.username,
      password: req.body.password
    },
    personalinformation: {
      firstname: req.body.firstname,
      lastname: req.body.lastname
    }
  });
  newUser.save(function(err){
    if(err){return next(err);}
    console.log('you where successful in creating the user');
  });
};

// GET A JSON RESPONSE WITH ALL THE DATA OF A USER
exports.get_UserData = function(req,res,next){
  var user = req.user.toJson();
  // console.log(user);
  res.json(user);
  next();
};

// PUT A RESPONSE WITH DATA BACK INTO THE DATABASE FOR THAT SPECIFIC USER.
exports.put_UserUpdate = function(req,res,next){
  var user = req.user;
  var update = req.body;
  // req.body has [object Object] use the bottom to see what its returning
  // var update = JSON.stringify(req.body);
  // console.log('PUT UPDATE RESPONSE   ' + update);

  _.merge(user, update);

  user.save(function (err,saved){
    if(err){
      next(err);
    } else {
      res.json(saved.toJson());
    }
  });
};

exports.post_NewCreditCard = function(req,res,next){
  var user = req.user;
  var newCard = req.body;

  user.paymentinformation.push(newCard);

  user.save(function (err,saved){
    if(err){
      next(err);
    } else {
      res.json(saved.toJson());
    }
  });
};

// var Parent = mongoose.model('Parent');
// var parent = new Parent;
//
// // create a comment
// parent.children.push({ name: 'Liesl' });
// var subdoc = parent.children[0];
// console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
// subdoc.isNew; // true
//
// parent.save(function (err) {
//   if (err) return handleError(err)
//   console.log('Success!');
// });
//
// var newdoc = parent.children.create({ name: 'Aaron' });

/***** could be useful *******/
//
// var childSchema = new Schema({ name: 'string' });
// var parentSchema = new Schema({
//   child: childSchema
// });
//
// var Parent = mongoose.model('Parent', parentSchema);
// var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })
// parent.children[0].name = 'Matthew';
// parent.save(callback);

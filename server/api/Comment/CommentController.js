var _ = require('lodash');
var comment = require('./CommentModel');

// IF Comment FOUND BY ID THEN ATTACH it TO [ req.comment]
exports.params = function(req,res,next,id){
  comment.findById(id)
    .then(function (comment){
      if (!comment){
        next(new Error('Comment not found'));
      } else {
        req.comment = comment;
        next();
      }
    }, function(err){
      next(err);
    });
};
// GET A JSON RESPONSE WITH ALL THE comment Data
exports.getCommentData = function(req,res,next) {
  var comment = req.comment.toJson();
  res.json(comment);
  next();
};

// POST REQUEST TO CREATE A NEW USER IN THE DATABASE
/*-----------------------------------------------------------------------
 | This route is being used by [ http://localhost:8080/auth/createaccount ]
 | in the create user tab.
 -----------------------------------------------------------------------*/
exports.postNewComment = function(req,res,next){
  var newComment = new comment(req.body/*data that was sent to local:8080/auth/createaccount*/);
  newComment.save(function(err,comment)/*when you save it to the database*/{
    if(err){return next(err);}
    console.log('you new comment saved');
    res.json(comment);
  });
};

/*exports.getExistingComment = function(req,res,next){

}*/

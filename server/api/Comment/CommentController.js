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


exports.postNewComment = function(req,res,next){

  var newComment = new comment(req.body);
  console.log('THIS IS THE CONTENTS OF newComment' + newComment);
  newComment.save(function(err,comment){
    if(err){return next(err);}
    console.log('your new comment was saved');
    res.json(comment);
  });
};

// router.get('/book/:bookIds', (req, res) => {
//   const BookId = req.params.bookIds
//   let BookArray = {};
//   mdb.collection('Books').find({ 'id': BookId })
//     .each((err, Book) => {
//       assert.equal(null, err);
//
//       if (!Book) { // no more names
//         res.send({ BookArray });
//         return;
//       }
//
//       BookArray[Book.id] = Book;
//     });
// });

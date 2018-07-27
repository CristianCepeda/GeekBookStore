import express from 'express';
const router = express.Router();
var comment_controller = require('./commentController');

//looks for comments in the database by their object id
router.param('id', comment_controller.params);

//function to post a new comment and save it in the database
router.post('/book/:bookIds/comment', comment_controller.postNewComment);

//get comment data from the database
router.get('/book/:bookId/comment', comment_controller.getCommentData);

//show comments
router.get('/book/:bookIds/comment', function(req,res){
  res.render('index', {
    content: 'Loading Sign In Page'
  });
});

export default router;

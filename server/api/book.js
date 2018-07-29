const express = require('express');
const router = express.Router();
var CommentController = require('./Comment/CommentController');



//mongo Connection
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var uri = 'mongodb+srv://ccepe014:password2018@geekbookstore-u9379.mongodb.net/test?retryWrites=true';
let mdb;
// Use connect method to connect to the server
MongoClient.connect(uri, function(err, db) {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  mdb = db.db('Vic');
});

router.get('/book', (req, res, next) => {
  let Books = {};
  mdb.collection('Books').find({})
    .project({
      id: 1,
      Name: 1,
      Author: 1,
      Url: 1,
      Rating: 1,
      Price: 1,
      Description: 1,
      MyBookComment:1
    })
    .each((err, Book) => {
      assert.equal(null, err);

      if (!Book) {
        res.send( Books );
        return;
      }

      Books[Book.id] = Book;
    });
});



router.get('/book/:bookIds', (req, res) => {
  const BookId = req.params.bookIds;
  let BookArray = {};
  mdb.collection('Books').find({ 'id': BookId })
    .each((err, Book) => {
      assert.equal(null, err);

      if (!Book) { // no more names
        res.send({ BookArray });
        return;
      }

      BookArray[Book.id] = Book;
    });
});

// router.post('book/:bookId/Comment', CommentController.postNewComment);
router.post('book/:bookid/Comment',(req,res) => {
  const bookID = req.params.bookid;
  console.log('BOOOOKKK ID   ' + bookID);
  let BookArray = {};
  mdb.collection('Books').find({ 'id': bookID })
    .each((err, Book) => {
      assert.equal(null, err);

      if (!Book) { // no more names
        res.send({ BookArray });
        return;
      }

      BookArray[Book.MyBookComment] = Book;
    });
});




export default router;

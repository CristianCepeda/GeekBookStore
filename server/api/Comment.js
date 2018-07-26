const express = require('express');
const router = express.Router();

//mongo Connection
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var uri = 'mongodb+srv://ccepe014:password2018@geekbookstore-u9379.mongodb.net/test?retryWrites=true';
let mdb;
// Use connect method to connect to the server
MongoClient.connect(uri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  mdb = db.db("Heli")
})

router.get('/Comment', (req, res, next) => {
  let Comments = {};
    mdb.collection('Comments').find({})
       .project({
         PostId: 1,
         Userame: 1,
         Text: 1,
       })
       .each((err, Comment]) => {
         assert.equal(null, err);

         if (!Comment) {
           res.send( Commnents );
           return;
         }

         Comments[Comment.id] = Comment;
       });
  });



router.get('/Comment/:CommentIds', (req, res) => {
  const CommentId = req.params.bookIds
  let CommentArray = {};
  mdb.collection('Comments').find({ 'id': CommentId })
     .each((err, Comment) => {
       assert.equal(null, err);

       if (!Comment) { // no more names
         res.send({ CommentArray });
         return;
       }

       CommentArray[Comment].id] = Comment;
     });
});




export default router;

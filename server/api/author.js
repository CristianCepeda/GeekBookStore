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
  console.log('Connected successfully to server');
  mdb = db.db('Vic');
});

router.get('/author', (req, res, next) => {
  let Authors = {};
  mdb.collection('Authors').find({})
    .project({
      AuthId: 1,
      Name: 1,
      Bio: 1
    })
    .each((err, Author) => {
      assert.equal(null, err);

      if (!Author) {
        res.send( Authors );
        return;
      }
      Authors[Author.id] = Author;
    });
  console.log('Authors:', Authors);

});



router.get('/author/:authorId', (req, res) => {
  const AuthorId = req.params.authorId;
  let AuthorArray = {};
  mdb.collection('Authors').find({ 'AuthId': AuthorId })
    .each((err, Author) => {
      assert.equal(null, err);

      if (!Author) { // no more names
        res.send({ AuthorArray });
        return;
      }

      AuthorArray[Author.id] = Author;
    });
});




export default router;

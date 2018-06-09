import express from 'express';

const router = express.Router();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/';
let mdb;
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  mdb = db.db("Vic")
})

router.get('/index', (req, res) => {
  let Books = {};
  mdb.collection('Books').find({})
  .each((err, Book) => {
    assert.equal(null, err);

    if(!Book){
      res.send(Books);
      return;
    }
    Books[Book.id] = Book;
  });
});
router.get('/Books/:BookId', (req, res) =>{});

export default router;

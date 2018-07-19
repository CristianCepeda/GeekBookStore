import express from 'express';

const router = express.Router();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var uri = 'mongodb+srv://ccepe014:password2018@geekbookstore-u9379.mongodb.net/test?retryWrites=true';
let mdb;
// Use connect method to connect to the server
MongoClient.connect(uri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  mdb = db.db("Vic")
})


router.get('/index', (req, res) => {
  let Books = {};
    mdb.collection('Books').find({})
       .project({
         id: 1,
         Name: 1,
         Author: 1
       })
       .each((err, Book) => {
         assert.equal(null, err);

         if (!Book) { // no more contests
           res.send({ Books });
           return;
         }

         Books[Book.id] = Book;
       });
  });

  export default router;

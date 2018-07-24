import express from 'express';
//data file (implements database for now)
import data from '../src/bookLibrary';
import topbooks from '../src/top10';
import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from '../config';
{/*
let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});
const router = express.Router();

router.get('/books', (req, res) =>{
  let books = {};
  mdb.collection('books').find({})
  .each((err, book) =>{
    assert.equal(null,err);

    if (!books){//no more books
      res.send({books});
      return;
    }
    books[book.id] = book;
  });
});*/}



const router = express.Router();

//Get home Page
router.get('/', function(req, res) {
  res.redirect('catalog');
});
router.get('/books', (req, res) => {
  res.send({ books: data.books });
});

router.get('/top10', (req, res) => {
  res.send({ books: topbooks.top10 });
});





export default router;

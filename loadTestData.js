import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  var dbo = db.db('mydb');
  var bookList =[

     {  id: 1, title: 'The Scarlet Letter',
        author: 'Nathaniel Hawthorne', publisher: 'Turtleback Books',
        isbn: '9781417664016'},
      {
        id: 2, title: 'Calypso', author: 'David Sedaris', publisher:
        'Little, Brown and Company', isbn: '9780316524827' },
      {
        id: 3, title: 'The Death of Mrs. Westaway', author: 'Ruth Ware',
        publisher: 'Gallery/Scout Press', isbn: '9781982103088' },
      {
        id: 4, title: 'The Outsider', author: 'Stephen King', publisher: 'Scribner',
        isbn: '9781501180989'},
      {
        id: 5, title: 'Shelter in Place', author: 'Nora Roberts',
        publisher: 'St. Martin\'s Press', isbn: '9781250161598'},
      {
        id: 6, title: 'The President Is Missing', author: 'Bill Clinton and James Patterson',
        publisher: 'Little, Brown and Company and Knopf', isbn: '9780316412698'},
      {
        id: 7, title: 'Oh, the Places You\'ll Go!', author: 'Dr. Seuss',
        publisher: 'Random House Children\'s Books', isbn: '9780679805274'},
      {
        id: 8, title: 'Legendary', author: 'Stephanie Garber', publisher: 'Flatiron Books',
        isbn: '9781250301277'},
      {
        id: 9, title: 'Fahrenheit 451', author: 'Ray Bradbury', publisher: 'Simon & Schuster',
        isbn: '9781451673319'},
      {
        id: 10, title: 'Refugee', author: 'Alan Gratz', publisher: 'Scholastic, Inc.',
        isbn: '9780545880831'}
  ];

    dbo.collection('books').insertMany(bookList, function(err, res){
      if (err) throw err;
      console.log('Number of documents inserted: ' + res.insertedCount);
    });
});

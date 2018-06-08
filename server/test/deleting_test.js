const mocha =  require('mocha');
const assert = require('assert');
const BookDet = require('../models/books');

//describe latest
describe('Deleting records', function(){
  var bk;
  beforeEach(function(done){
    bk = new BookDet({ //mongoose gives the obj an Id
      title: 'Notebook'
    });

    //after saved then object is not new anymore...false
    bk.save().then(function(){
      done();
    });
  });
  //create tests
   //delete by name
  it('Deletes one record from the database', function(done){
    BookDet.findOneAndRemove({title: 'Notebook'}).then(function(){
      BookDet.findOne({title: 'Notebook'}).then(function(result){
        assert(result === null);
        done();
      });
    });
  });
});


  //create next test

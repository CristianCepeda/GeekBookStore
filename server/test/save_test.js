const mocha =  require('mocha');
const assert = require('assert');
const BookDet = require('../models/books');

//describe latest
describe('Saving records', function(){

  //create tests
  it('Saves a record to the database', function(done){
//new instance of a book
    var bk = new BookDet({
      title: 'Notebook'
    });

//after saved then object is not new anymore...false
    bk.save().then(function(){
      assert(bk.isNew === false);
      done();//tells mocha completed test, does not know when saved. make sure to place done as param in it()
    });
  });

  //create next test
});

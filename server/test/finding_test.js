const mocha =  require('mocha');
const assert = require('assert');
const BookDet = require('../models/books');

//describe latest
describe('Finding records', function(){
  var bk;
  beforeEach(function(done){
    bk = new BookDet({
      title: 'Notebook'
    });

    //after saved then object is not new anymore...false
    bk.save().then(function(){
      assert(bk.isNew === false);
      done();
    });
  });
  //create tests
   //find by name
  /*it('find one record to the database', function(done){
    BookDet.findOne({title: 'Notebook'}).then(function(result){
      assert(result.title === 'Notebook');//behaves like print statement
      done();
    });
  });*/

  //find by // ID
  it('find one record by ID from the database', function(done){
    BookDet.findOne({_id:bk._id}).then(function(result){
      assert(result._id.toString === bk._id.toString);//behaves like print statement
      done();
    });
  });
});

  //create next test

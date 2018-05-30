const mocha =  require('mocha');
const assert = require('assert');
const BookDet = require('../models/books');

//describe latest
describe('Updating records', function(){
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
  it('Update one record from the database', function(done){
    BookDet.findOneAndUpdate({title: 'Notebook'}, {title: 'Mice and Men'}).
    then(function(){
      BookDet.findOne({_id: bk._id}).then(function(result){
        assert(result.title === 'Mice and Men');
        done();
      })
    })
  });
});


  //create next test

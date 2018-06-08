const mongoose = require('mongoose');
const express = require('express');//require keyword gain access to express library;
const app = express(); //calling express func to generate a new applic run express app; app object listeing for request from port

//connecting to the db before tests are runs
before(function(done){
  //connect to mongodb
  mongoose.connect('mongodb://localhost/test');

  mongoose.connection.once('open', function(){
    console.log('MongoDB Connection has been made');
    done();
    //runs as long as there is an error
  }).on('error', function(error){
      console.log('MongoDB Connection error:', error);
  });
});
//Drop bk collection before each test
beforeEach(function(done){
  //drop the collection
  //mongoose.connection.collections.bookdets.drop(function(){
  mongoose.connection.collections.books.drop(function(){
    done();
  });
});

/*create a route handler and associate it with a given route*/
app.get('/', (req, res) => {
  res.send({hi: 'there'});
})

const PORT = process.env.PORT || 5000; //use port and env var server serv (like heroku) sets up or use 5000 if in dev envir (local machine)
app.listen(5000);//listen for request from port 5000;

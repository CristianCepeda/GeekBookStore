var express = require('express');
var router = express.Router();

var user_controller = require('./userController');

router.get('/', function(req,res){
  res.send('hello');
});

router.post('/', user_controller.postNewUser);


export default router;

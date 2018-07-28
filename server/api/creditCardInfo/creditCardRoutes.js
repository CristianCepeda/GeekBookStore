var express = require('express');
var router = express.Router();
var creditcard_controller = require('./creditCardController');

router.post('/', creditcard_controller.postNewCreditCard);

export default router;

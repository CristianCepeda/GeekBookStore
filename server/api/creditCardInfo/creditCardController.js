var CreditCard = require('./creditCardModel');

exports.postNewCreditCard = function(req,res,next){
  var newCreditCard = new CreditCard(req.body);
  newCreditCard.save(function(err){
    if(err){return next(err);}
    console.log('You where successful in creating a new Credit Card');
  });
};

var express = require('express');
var router = express.Router();
var user_controller = require('./userController');

/*  ----------------------------------------------------------------------
    | This will look for :id in the the route if its present then we can
    | map id loading logic automatically and provide req.id to the route
    | ABOVE NOTES ARE FROM [ expressjs.com ]
    | - Now in the function form the controller it will take the id, and
    | it will see if it can find it in the database first. If it doesn't
    | find it then we are throwing an error. And if it found it then we
    | attach the user it returns to req.user. so that later we can just
    | reference it.
    ----------------------------------------------------------------------*/
router.param('id', user_controller.params);

/*  ----------------------------------------------------------------------
    | From the Component AccountPage the users will hit these routes
    | underneath so that they can fetch the necessary data to populate
    | the fields necessary.
    |
    |   THE PATH IS [ http://localhost:8080/user/ ]
    |   AND THEN WHATEVER ELSE IS ADDED
    ----------------------------------------------------------------------*/
// GIVE BACK A JSON OBJECT OF THE USER REQUEST WITH THAT SPECIFIC [ ObjectId ]
router.get('/:id/data', user_controller.get_UserData);
// SEND USERS PASSED UPDATED CHANGES INTO THE DATABASE
router.put('/:id/updateinfo', user_controller.put_UserUpdate);
router.post('/:id/createcreditcard', user_controller.post_NewCreditCard);
router.post('/:id/createshippingaddress', user_controller.post_NewShippingInfo);
/* -------------------- UPDATE THE THINGS BELOW --------------------------
    | You will have to update these later so that it only queries the
    | necessary information and it doesn't send back unnecessary information
    | or information that wasn't requested.
    ----------------------------------------------------------------------*/
// router.get('/:id/nickname', user_controller.get_UserData);
// router.put('/:id/nickname', user_controller.put_UserUpdate);
// router.get('/:id/personalinfo', user_controller.get_UserData);
// router.put('/:id/personalinfo', user_controller.put_UserUpdate);
// router.get('/:id/paymentinfo', user_controller.get_User);
export default router;

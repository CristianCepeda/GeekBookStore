import express from 'express';
const router = express.Router();
var account_controller = require('./accountPageController');


// THE ENDPOINTS TAG ON TO THIS 'http://localhost:8080/account/'

router.param('id', account_controller.params);

router.get('/', account_controller.displayAccountPage);
router.get('/:id', account_controller.getUserData);
router.put('/:id/login', account_controller.updateUserLoginInfo);



// get someone by their Object ID
// 5b51082faacd7558968c1790
// router.get('/5b51082faacd7558968c1790',account_controllers.get_By_ObjectId);
// get someone by their /:firstname-:lastname
// router.get('/cristian-cepeda', account_controllers.get_By_Firstname_Lastname);

export default router;

import express from 'express';
import homePageRoutes from './homePage/homePageRoutes';
import accountPageRoutes from './accountPage/accountPageRoutes';
import signinPageRoutes from './signinPage/signinPageRoutes';
import userRoutes from './user/userRoutes';
/* Remember that a function in javascript is just an object. So we can attach
other properties on that object.
*/

const router = express.Router();

/* This would be like a Service Oriented Architecture Style */
router.use('/', homePageRoutes);
router.use('/account', accountPageRoutes);
router.use('/signin', signinPageRoutes);
router.use('/user', userRoutes);

/*Victor's Routes*/
router.get('/bookPage/:bookId', function (req, res) {
  res.render('index', {
    content: 'This is content from server.js'
  });
});

export default router;

import express from 'express';
import accountPageRoutes from './accountPage/accountPageRoutes';
import signInRoutes from './signIn/signInRoutes';
/* Remember that a function in javascript is just an object. So we can attach
other properties on that object.
*/

const router = express.Router();

/* This would be like a Service Oriented Architecture Style */
router.use('/accountPage', accountPageRoutes);
router.use('/signIn', signInRoutes);

export default router;

import express from 'express';

/* Remember that a function in javascript is just an object. So we can attach
other properties on that object.
*/

const router = express.Router();

router.get('/signin', (req,res) => {
  res.render('index', {
    content: 'Loading Sign In Page'
  });
});

router.get('/accountpage', (req,res) => {
  res.render('index', {
    content: 'Loading Account Page'
  });
});

export default router;

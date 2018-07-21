import express from 'express';

const router = express.Router();

router.get('/bookPage/:bookId', function (req, res) {
  res.render('index', {
    content: 'This is content from server.js'
  });
  });




  export default router;

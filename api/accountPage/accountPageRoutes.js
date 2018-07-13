import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index', {
    content: 'Loading Account Page'
  });
});

export default router;

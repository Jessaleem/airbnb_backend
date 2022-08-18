const Router = require('express');

const router = Router();

router.get('/', (_, res) => {
  res.json({ message: 'This server is running!' });
});

module.exports = router;

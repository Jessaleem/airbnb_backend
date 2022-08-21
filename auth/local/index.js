const { Router } = require('express');

const {
  loginUserHandler,
  verifyAccountHandler,
} = require('./auth.controller');

const router = Router();

router.post('/login', loginUserHandler);
router.get('/verifyAccount/:token', verifyAccountHandler);

module.exports = router;

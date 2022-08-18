const { Router } = require('express');

const {
  loginUserHandler,
} = require('./auth.controller');

const router = Router();

router.post('/login', loginUserHandler);

module.exports = router;

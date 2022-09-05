const { Router } = require('express');
const { isAuthenticated } = require('../auth.service');

const {
  loginUserHandler,
  verifyAccountHandler,
  changePassword,
} = require('./auth.controller');

const router = Router();

router.post('/login', loginUserHandler);
router.get('/verifyAccount/:token', verifyAccountHandler);
router.patch('/:id', isAuthenticated, changePassword);

module.exports = router;

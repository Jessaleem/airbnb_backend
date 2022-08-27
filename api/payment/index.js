const { Router } = require('express');

const handlerPayment = require('./payment.controller');
const { isAuthenticated /* verifyRole */ } = require('../../auth/auth.service');
// ----> no me autoriza siendo GUEST o ADMIN

const router = Router();

router.post('/', isAuthenticated, handlerPayment);

module.exports = router;

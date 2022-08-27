const { Router } = require('express');

const handlerPayment = require('./payment.controller');
// const { isAuthenticated, verifyRole } = require('../../auth/auth.service');
// ----> no me autoriza cuando aun siendo GUEST

const router = Router();

router.post('/', handlerPayment);

module.exports = router;

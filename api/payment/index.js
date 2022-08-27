const { Router } = require('express');

const handlerPayment = require('./payment.controller');
const { isAuthenticated, verifyRole } = require('../../auth/auth.service');

const router = Router();

router.post('/', isAuthenticated, verifyRole(['ADMIN', 'GUEST']), handlerPayment);

module.exports = router;

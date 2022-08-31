const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');
const userValidator = require('./joi.validation/joi.validator');
const {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
  meUserHandler,
} = require('./users.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', userValidator, createUserHandler);
router.get('/me', isAuthenticated, meUserHandler);
router.get('/:id', getSingleUserHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', isAuthenticated, deleteUserHandler);

module.exports = router;

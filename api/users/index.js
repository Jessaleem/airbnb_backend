const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');
const userValidator = require('./joi.validation/joi.validator');
const {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} = require('./users.controller');

const router = Router();

router.get('/', isAuthenticated, getAllUsersHandler);
router.post('/', userValidator, createUserHandler);
router.get('/:id', isAuthenticated, getSingleUserHandler);
router.patch('/:id', isAuthenticated, updateUserHandler);
router.delete('/:id', isAuthenticated, deleteUserHandler);

module.exports = router;

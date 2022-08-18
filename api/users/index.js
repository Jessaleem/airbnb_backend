const Router = require('express');
const userValidator = require('./joi.validation/joi.validator');
const {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} = require('./users.controller');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', userValidator, createUserHandler);
router.get('/:id', getSingleUserHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;

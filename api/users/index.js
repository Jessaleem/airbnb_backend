const Router = require('express');

const{
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} = require('./users.controller')

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getSingleUserHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;

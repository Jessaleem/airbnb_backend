const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const {
  createSpaceHandler,
  deleteSpaceHandler,
  getAllSpacesHandler,
  getSingleSpaceHandler,
  updateSpaceHandler,
} = require('./spaces.controller');

const router = Router();

router.get('/', getAllSpacesHandler);
router.post('/', isAuthenticated, createSpaceHandler);
router.get('/:id', getSingleSpaceHandler);
router.patch('/:id', isAuthenticated, updateSpaceHandler);
router.delete('/:id', isAuthenticated, deleteSpaceHandler);

module.exports = router;

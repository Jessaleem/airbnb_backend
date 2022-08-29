const Router = require('express');
const { isAuthenticated, verifyRole } = require('../../auth/auth.service');
const spaceValidator = require('./joi.validation/joi.validator');

const {
  createSpaceHandler,
  deleteSpaceHandler,
  getAllSpacesHandler,
  getSingleSpaceHandler,
  updateSpaceHandler,
} = require('./spaces.controller');

const router = Router();

router.get('/', getAllSpacesHandler);
router.post('/', isAuthenticated, verifyRole(['ADMIN', 'HOST']), createSpaceHandler);
router.get('/:id', getSingleSpaceHandler);
router.patch('/:id', spaceValidator, isAuthenticated, verifyRole(['ADMIN', 'HOST']), updateSpaceHandler);
router.delete('/:id', isAuthenticated, verifyRole(['ADMIN', 'HOST']), deleteSpaceHandler);

module.exports = router;

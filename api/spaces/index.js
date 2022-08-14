const Router = require('express');

const {
  createSpaceHandler,
  deleteSpaceHandler,
  getAllSpacesHandler,
  getSingleSpaceHandler,
  updateSpaceHandler,
} = require('./spaces.controller');

const router = Router();

router.get('/', getAllSpacesHandler);
router.post('/', createSpaceHandler);
router.get('/:id', getSingleSpaceHandler);
router.patch('/:id', updateSpaceHandler);
router.delete('/:id', deleteSpaceHandler);

module.exports = router;

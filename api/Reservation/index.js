const Router = require('express');

const {
  createReservationHandler,
  updateReservationHandler,
  deleteReservationHandler,
  getAllReservationHandler,
  getSingleReservationHandler,
} = require('./reservation.controller');

const router = Router();

router.get('/', getAllReservationHandler);
router.post('/', createReservationHandler);
router.get('/:id', getSingleReservationHandler);
router.patch('/:id', updateReservationHandler);
router.delete('/:id', deleteReservationHandler);

module.exports = router;

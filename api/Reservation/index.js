const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');
const { reservationValidator, reservationUpdateValidator } = require('./joi.validation/joi.validator');

const {
  createReservationHandler,
  updateReservationHandler,
  deleteReservationHandler,
  getUserReservationsHandler,
  getAllReservationHandler,
  getSingleReservationHandler,
} = require('./reservation.controller');

const router = Router();

router.get('/', getAllReservationHandler);
router.post('/', isAuthenticated, reservationValidator, createReservationHandler);
router.get('/byUserId/:userId', getUserReservationsHandler);
router.get('/:id', getSingleReservationHandler);
router.patch('/:id', isAuthenticated, reservationUpdateValidator, updateReservationHandler);
router.delete('/:id', deleteReservationHandler);

module.exports = router;

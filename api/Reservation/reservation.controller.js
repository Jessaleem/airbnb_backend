/* eslint-disable no-underscore-dangle */
const {
  getAllReservations,
  getSingleReservation,
  createReservation,
  getuserReservation,
  updateReservation,
  deleteReservation,
} = require('./reservation.services');

async function getAllReservationHandler(req, res) {
  try {
    const space = await getAllReservations();
    return res.status(200).json(space);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleReservationHandler(req, res) {
  const { id } = req.params;

  try {
    const reservation = await getSingleReservation(id);

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    return res.json(reservation);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function createReservationHandler(req, res) {
  const {
    arrive,
    departure,
    adults,
    children,
    pets,
    price,
    _id,
  } = req.body;

  try {
    const newReservation = await createReservation({
      arrive,
      departure,
      adults,
      children,
      pets,
      price,
      userId: req.user._id,
      spaceId: _id,
    });
    return res.status(201).json(newReservation);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
async function getUserReservationsHandler(req, res) {
  try {
    const userId = req.params;
    const reservations = await getuserReservation(userId);
    return res.status(200).json(reservations);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
}

async function updateReservationHandler(req, res) {
  const { id } = req.params;
  const reservationData = req.body;

  try {
    const reservation = await updateReservation(id, reservationData);
    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteReservationHandler(req, res) {
  const { id } = req.params;
  try {
    const reservation = await deleteReservation(id);

    if (!reservation) {
      return res.status(400).json({ message: 'Reservation not found' });
    }

    return res.json(reservation);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  createReservationHandler,
  updateReservationHandler,
  deleteReservationHandler,
  getAllReservationHandler,
  getSingleReservationHandler,
  getUserReservationsHandler,
};

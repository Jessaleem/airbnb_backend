const Reservation = require('./reservation.model');

function getAllReservations() {
  return Reservation.find({});
}

function getSingleReservation(id) {
  return Reservation.findById(id);
}

function createReservation(reservation) {
  return Reservation.create(reservation);
}

function getuserReservation(reservation) {
  const user = reservation.userId;
  console.log(user);
  return Reservation.find({ userId: `${user}` });
}

function updateReservation(id, reservation) {
  return Reservation.findByIdAndUpdate(id, reservation, { new: true });
}

function deleteReservation(id) {
  return Reservation.findByIdAndRemove(id);
}

module.exports = {
  getAllReservations,
  getSingleReservation,
  createReservation,
  getuserReservation,
  updateReservation,
  deleteReservation,
};

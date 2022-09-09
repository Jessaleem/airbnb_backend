const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  spaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'space',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  arrive: {
    type: Date,
    required: true,
  },
  departure: {
    type: Date,
    required: true,
  },
  children: {
    type: Number,
  },
  adults: {
    type: Number,
  },
  pets: {
    type: Number,
  },
  price: {
    type: Number,
  },
  pays: {
    type: mongoose.Types.ObjectId,
    ref: 'Pays',
  },
});

const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;

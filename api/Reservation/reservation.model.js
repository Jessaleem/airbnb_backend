const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  space: {
    type: mongoose.Types.ObjectId,
    ref: 'Space',
    required: true,
  },
  host: {
    type: mongoose.Types.ObjectId,
    ref: 'Host',
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dates: {
    arrive: {
      type: Date,
      required: true,
    },
    departure: {
      type: Date,
      required: true,
    },
  },
  howMany: {
    children: {
      type: Number,
    },
    adults: {
      type: Number,
    },
    pets: {
      type: Number,
    },
  },
  pays: {
    type: mongoose.Types.ObjectId,
    ref: 'Pays',
    required: true,
  },
});

const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;

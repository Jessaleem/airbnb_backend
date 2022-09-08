const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  space: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'space',
    required: true,
  },
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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
  price: {
    type: Number,
  },
  pays: {
    type: mongoose.Types.ObjectId,
    ref: 'Pays',
    // required: true,
  },
});

const Reservation = mongoose.model('reservations', ReservationSchema);

module.exports = Reservation;

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  refId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    uppercase: true,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    trim: true,
    uppercase: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;

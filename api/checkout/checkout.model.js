const mongoose = require('mongoose');

const payment = new mongoose.Schema({
  customeId: String,
  card: [
    {
      paymentMethodId: String,
      brand: String,
      country: String,
      expMonth: String,
      expYear: String,
      funding: String,
      last4: String,
    },
  ],
});

const checkOut = mongoose.Model('payment', payment);

module.exports = checkOut;

/* eslint-disable no-unused-vars */
const {
  makePayment,
  createPayment,
} = require('./payment.service');

async function handlerPayment(req, res) {
  const { user } = req;
  const { paymentMethod, amount } = req.body;
  if (!user?.payment?.customerId) {
    res.json({ message: 'Create new user' });
    return;
  }
  try {
    res.json({ amount, user });
  } catch (error) {
    res.status(500).json({ '[ERROR': error.message });
  }
}

module.exports = handlerPayment;

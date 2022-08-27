const Stripe = require('stripe');

const Payment = require('./payment.model');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function makePayment({ paymentMethod, amount }) {
  const { id } = paymentMethod;
  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Example charge - Top v23',
    });

    return payment;
  } catch (error) {
    console.log({ '[message]': error.message });
    throw error;
  }
}

function createPayment(payment) {
  return Payment.create(payment);
}

module.exports = {
  makePayment,
  createPayment,
};

const Stripe = require('stripe');

const Payment = require('./payment.model');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function makePayment({ paymentMethod, amount, customer }) {
  const { id } = paymentMethod;
  try {
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Nuevo pago',
      customer: customer.id,
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

async function createCustomer(user, paymentMethod) {
  try {
    const customer = await stripe.customers.create({
      email: user.email,
      name: `${user.name} ${user.lastName}`,
      payment_method: paymentMethod.Id,
    });

    return customer;
  } catch (error) {
    console.log({ '[ERROR]': error.message });
    throw error;
  }
}

async function retrieveCustomer(customerId) {
  try {
    const customer = await stripe.customers.retrieve(customerId);

    return customer;
  } catch (error) {
    console.log({ '[ERROR]': error.message });
    throw error;
  }
}

module.exports = {
  makePayment,
  createPayment,
  createCustomer,
  retrieveCustomer,
};

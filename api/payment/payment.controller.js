/* eslint-disable no-underscore-dangle */
const {
  makePayment,
  createPayment,
  createCustomer,
} = require('./payment.service');
const { updateUser } = require('../users/users.services');

async function handlerPayment(req, res) {
  const { user } = req;
  const { paymentMethod, amount } = req.body;

  try {
    const { id, card } = paymentMethod;

    let paymentCard = null;
    let customer = null;
    if (!user?.payment?.customerId) {
      customer = await createCustomer(user, paymentMethod);

      const userToUpdate = {
        payment: {
          customerId: customer.id,
          cards: [{
            paymentMethodId: id,
            brand: card.brand,
            country: card.country,
            expMonth: card.exp_month,
            expYear: card.exp_year,
            funding: card.funding,
            last4: card.last4,
          }],
        },
      };
      await updateUser(user._id, userToUpdate);
      paymentCard = {
        id,
      };
    } else {
      customer = { id: user.payment.customerId };
      paymentCard = {
        id: user.payment.cards[0].paymentMethodId,
      };
    }

    const payment = await makePayment({ paymentMethod: paymentCard, amount, customer });
    const registerPayment = {
      refId: payment.id,
      description: payment.description,
      value: payment.amount,
      currency: payment.currency,
      userId: user._id,
    };

    await createPayment(registerPayment);

    return res.json(payment);
  } catch (error) {
    res.status(500).json({ '[ERROR]': error.message });
    throw error;
  }
}

module.exports = handlerPayment;

const Joi = require('joi');

const date = new Date();
const arriveDate = date.setDate(date.getDate() + 1);
const departureDate = (arriveDate + 1);

const reservationSchema = Joi.object({
  dates: {
    arrive:
    Joi.date()
      .min(arriveDate)
      .required(),
    departure:
    Joi.date()
      .min(departureDate)
      .required(),
  },
  howMany: {
    children:
    Joi.number(),
    adults:
    Joi.number()
      .min(1)
      .required(),
    pets:
    Joi.number(),
  },
});

const reservationUpdateSchema = Joi.object({
  dates: {
    arrive:
    Joi.date()
      .min(arriveDate)
      .allow(''),
    departure:
    Joi.date()
      .min(departureDate)
      .allow(''),
  },
  howMany: {
    children:
    Joi.number()
      .allow(''),
    adults:
    Joi.number()
      .min(1)
      .allow(''),
    pets:
    Joi.number()
      .allow(''),
  },
});

module.exports = {
  reservationSchema,
  reservationUpdateSchema,
};

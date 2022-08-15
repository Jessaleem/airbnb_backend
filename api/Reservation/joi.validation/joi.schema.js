const Joi = require('joi');
const Space = require('../../spaces/spaces.model');

const { dates } = Space;

const reservationSchema = Joi.object({
  dates: {
    arrive:
    Joi.date()
      .min()
      .ref(dates),
    departure:
      Joi.string(),
  },
  howMany:
    Joi.string(),
});

module.exports = reservationSchema;

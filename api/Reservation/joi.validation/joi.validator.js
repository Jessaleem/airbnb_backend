/* eslint-disable consistent-return */
const {
  reservationSchema,
  reservationUpdateSchema,
} = require('./joi.schema');

const reservationValidator = async (req, res, next) => {
  const payload = {
    dates: req.body.dates,
    arrive: req.body.dates.arrive,
    departure: req.body.dates.departure,
    howMany: req.body.howMany,
    children: req.body.howMany.children,
    adults: req.body.howMany.adults,
    pets: req.body.howMany.pets,
  };

  const { error } = await reservationSchema.validate(payload, {
    abortEarly: false, allowUnknown: true,
  });
  if (error) {
    return res.status(401).json({ message: error });
  }
  next();
};
const reservationUpdateValidator = async (req, res, next) => {
  const { payload } = req.body;

  const { error } = await reservationUpdateSchema.validate(payload, {
    abortEarly: false, allowUnknown: true,
  });
  if (error) {
    return res.status(401).json({ message: error });
  }
  next();
};

module.exports = {
  reservationValidator,
  reservationUpdateValidator,
};

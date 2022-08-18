const Joi = require('joi');

const spaceSchema = Joi.object({
  title:
  Joi.string()
    .required(),
  img:
  Joi.string(),
  date:
  Joi.date()
    .required(),
  price:
  Joi.number()
    .required(),
  howMany:
  Joi.string()
    .required(),
  adress:
  Joi.object({
    street:
      Joi.string()
        .required(),
    city:
    Joi.string()
      .required(),
    state:
    Joi.string()
      .required(),
    country:
    Joi.string()
      .required(),
    zipCode:
    Joi.string()
      .required(),
  })
    .required(),
  type:
    Joi.string()
      .valid('House', 'Apartment', 'Ranch', 'Bed and Brackfast')
      .default('House'),
  privacyType:
  Joi.string()
    .valid('Entire place', 'Private room', 'Shared room'),
  amenities:
    Joi.object({
      beds:
      Joi.string()
        .required(),
      kitchen:
        Joi.array()
          .items(Joi.string())
          .required(),
      bathroom:
        Joi.array()
          .items(Joi.string())
          .required(),
      bedroomAndLaundry:
        Joi.array()
          .items(Joi.string())
          .required(),
      facilities:
        Joi.array()
          .items(Joi.string())
          .required(),
      entertaiment:
        Joi.array()
          .items(Joi.string())
          .required(),
    }),
  description:
      Joi.string()
        .required(),
});

module.exports = spaceSchema;

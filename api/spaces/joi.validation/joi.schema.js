const Joi = require('joi');

const spaceSchema = Joi.object({
  title:
  Joi.string()
    .required(),
  img:
  Joi.string(),
  date:
  Joi.date(),
  price:
  Joi.number()
    .required(),
  howMany:
  Joi.string()
    .required(),
  coordinates:
  Joi.object({
    latitude:
      Joi.number(),
    longitude:
      Joi.number(),
  }),
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
      .valid('HOUSE', 'APARTMENT', 'RANCH', 'BED_AND_BREAKFAST')
      .default('HOUSE'),
  privacyType:
  Joi.string()
    .valid('ENTIRE_PLACE', 'PRIVATE_ROOM', 'SHARED_ROOM'),
  amenities:
    Joi.object({
      beds:
      Joi.string()
        .required(),
      bedrooms:
      Joi.string(),
      /* .required() */
      bathrooms:
      Joi.string(),
      /* .required(), */
      kitchen:
        Joi.array()
          .items(Joi.string()),
      bathroom:
        Joi.array()
          .items(Joi.string()),
      bedroomAndLaundry:
        Joi.array()
          .items(Joi.string()),
      facilities:
        Joi.array()
          .items(Joi.string()),
      entertaiment:
        Joi.array()
          .items(Joi.string()),
    }),
  description:
      Joi.string()
        .required(),
});

module.exports = spaceSchema;

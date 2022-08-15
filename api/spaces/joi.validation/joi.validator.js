/* eslint-disable consistent-return */
const spaceSchema = require('./joi.schema');

const spaceValidator = async (req, res, next) => {
  const payload = {
    title: req.body.title,
    img: req.body.img,
    date: req.body.date,
    price: req.body.price,
    howMany: req.body.howMany,
    adress: req.body.adress,
    host: req.body.host,
    type: req.body.type,
    privacyType: req.body.privacyType,
    amenities: req.body.amenities,
    description: req.body.description,
  };

  const { error } = await spaceSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    return res.status(401).json({ message: error });
  }
  next();
};

module.exports = spaceValidator;

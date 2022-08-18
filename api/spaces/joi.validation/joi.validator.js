/* eslint-disable consistent-return */
const spaceSchema = require('./joi.schema');

const spaceValidator = (req, res, next) => {
  const payload = req.body;

  const { error } = spaceSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    return res.status(401).json({ message: `That's not permited, ${error.message}` });
  }
  next();
};

module.exports = spaceValidator;

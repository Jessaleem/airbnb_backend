/* eslint-disable consistent-return */
const userSchema = require('./joi.schema');

const userValidator = async (req, res, next) => {
  const payload = req.body;

  const { error } = await userSchema.validate(payload, {
    abortEarly: false, allowUnknown: true,
  });
  if (error) {
    return res.status(401).json({ message: error });
  }
  next();
};

module.exports = userValidator;

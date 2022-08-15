/* eslint-disable consistent-return */
const userSchema = require('./joi.schema');

const userValidator = async (req, res, next) => {
  const payload = {
    name: req.body.name,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    gender: req.body.gender,
    about: req.body.about,
    role: req.body.role,
    birthDate: req.body.birthDate,
    password: req.body.password,
  };
  const { error } = await userSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    return res.status(401).json({ message: error });
  }
  next();
};

module.exports = userValidator;

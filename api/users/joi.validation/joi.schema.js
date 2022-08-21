const Joi = require('joi');

const today = Date.now();
const cutoffDate = new Date(today - (18 * 365 * 24 * 60 * 60 * 1000));

const userSchema = Joi.object({
  name:
    Joi.string()
      .required(),
  lastName:
    Joi.string()
      .required(),
  phone:
    Joi.string()
      .required(),
  email:
    Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
  gender:
    Joi.string()
      .default('other'),
  // about:
  //   Joi.string(),
  //     // .required(),
  avatar:
    Joi.string()
      .default('https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716563/images/Account/Userlogo_pyxlip.png'),
  role:
    Joi.string()
      .default('GUEST')
      .valid('GUEST', 'HOST', 'ADMIN')
      .required(),
  birthDate:
    Joi.date()
      .max(cutoffDate)
      .required(),
  password:
    Joi.string()
      .alphanum()
      .min(8)
      .required(),
});

module.exports = userSchema;

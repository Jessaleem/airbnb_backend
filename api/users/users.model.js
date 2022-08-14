const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  gender: {
    type: String,
  },
  about: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716563/images/Account/Userlogo_pyxlip.png',
  },
  role: {
    type: String,
    enum: ['guest', 'host', 'admin'],
    default: 'guest',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  bankAccount: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

UserSchema.virtual('password').get(function () {
  return this.password;
});

UserSchema.virtual('profile').get(function () {
  const {
    name, lastName, email, role,
  } = this;

  return {
    name,
    lastName,
    email,
    role,
  };
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

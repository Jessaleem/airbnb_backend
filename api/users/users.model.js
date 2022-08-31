/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Payment = new mongoose.Schema({
  customerId: String,
  cards: [
    {
      paymentMethodId: String,
      brand: String,
      country: String,
      expMonth: Number,
      expYear: Number,
      funding: String,
      last4: String,
    },
  ],
});

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
    default: 'Write something about yourself...',
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/equipo-maravilla/image/upload/v1659716563/images/Account/Userlogo_pyxlip.png',
  },
  role: {
    type: String,
    enum: ['GUEST', 'HOST', 'ADMIN'],
    default: 'GUEST',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  payment: Payment,
  location: {
    type: String,
  },
  languajes: {
    type: String,
  },
  reviews: {
    type: String,
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
}, { timestamps: true });

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

UserSchema.pre('save', async function save(next) {
  const user = this;

  try {
    if (!user.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function comparePassword(password, next) {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  } catch (error) {
    next(error);
    return false;
  }
};

const User = mongoose.model('user', UserSchema);

module.exports = User;

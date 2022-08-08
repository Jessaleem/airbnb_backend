const mongoose = require('mongoose');
const validate = require('mongoose-validator').validate;

const userSchema = new mongoose.Schema ({
  name: {
    type: String,
    required:[true, "Is empty"],
    minlength:3,
  },
  lastName: {
    type: String,
    required:[true, "Is empty"],
  },
  phone: {
    type: Number,
    required:[true, "Is empty"],
  },
  email: {
    type: String,
    required:[true, "Is empty"],
    lowercase: true,
  },
  gender: {
    type: String,
  },
  about: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  private: {
    password:{
      type: String,
      required: true,
      minlength: 8,
    },
    bankAccount:{
      type: String,
      required: true,
    },
    date:{
      type: Date,
      required: false,
      min: Date.now - 18 * 12 * 30 * 24 * 60 * 60 * 1000,
      max: Date.now + 80 * 24 * 60 * 60 * 1000,
    },
  },
},
{timestamps: true})

const User = mongoose.model("user", userSchema);

module.exports = User;

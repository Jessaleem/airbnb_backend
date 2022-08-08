const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
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
  },
  gender: {
    type: String,
    required: true,
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
    },
    bankAccount:{
      type: String,
      required: true,
    },
    date:{
      type: String,
      required: true,
    },
  },
},
{timestamps: true})

const User = mongoose.model("user", userSchema);

module.exports = User;

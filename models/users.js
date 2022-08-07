const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
  },
  last_name: {
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
    bank_account:{
      type: String,
      required: true,
    },
    date:{
      type: String,
      required: true,
    },
  },
})

const User = mongoose.model("User", UsersSchema);

module.exports = User; 
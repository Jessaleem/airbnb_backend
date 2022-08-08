const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  dates: {
    type: Date,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  howMany: {
    type: String,
    required: true,
  },
  adress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: false,
    },
  },
  owner:{
    type: String,
  },
  type: {
    house: {
      type: Boolean,
      required: true,
    },
    apartment: {
      type: Boolean,
      required: true,
    },
    ranch: {
      type: Boolean,
      required: true,
    },
    bedAndBreakfast: {
      type: Boolean,
      required: true,
    }
  },
  privacyType:{
    entirePlace: {
      type: Boolean,
      required: true,
    },
    privateRoom: {
      type: Boolean,
      required: true,
    },
    sharedRoom: {
      type: Boolean,
      required: true,
    }
  },
  amenities:{
    beds:{
      type: String,
      required: true,
    },
    kitchen:{
      type: Array,
      of: String,
      required: true,
    },
    bathroom:{
      type: Array,
      of: String,
      required: true,
    },
    bedroomAndLaundry:{
      type: Array,
      of: String,
      required: true,
    },
    facilities:{
      type: Array,
      of: String,
      required: true,
    },
    entertaiment:{
      type: Array,
      of: String,
      required: true,
    }
  },
  description:{
    type: String,
    required: true,
  }
},
{timestamps: true});

const Space = mongoose.model("space", spaceSchema);

module.exports = Space;


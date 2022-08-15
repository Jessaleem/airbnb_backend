const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
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
    type: Number,
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
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  type: {
    type: String,
    enum: ['House', 'Apartment', 'Ranch', 'Bed and breakfast'],
    default: 'House',
  },
  privacyType: {
    tupe: String,
    enum: ['Entire place', 'Private room', 'Shared room'],
  },
  amenities: {
    beds: {
      type: String,
      required: true,
    },
    kitchen: [
      {
        type: String,
        required: true,
      },
    ],
    bathroom: [
      {
        type: String,
        required: true,
      },
    ],
    bedroomAndLaundry: [
      {
        type: String,
        required: true,
      },
    ],
    facilities: [
      {
        type: String,
        required: true,
      },
    ],
    entertaiment: [
      {
        type: String,
        required: true,
      },
    ],
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Space = mongoose.model('space', SpaceSchema);

module.exports = Space;

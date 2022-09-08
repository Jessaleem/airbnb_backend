const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: [{
    type: String,
    required: true,
  }],
  price: {
    type: Number,
    required: true,
  },
  floorPlan: {
    guest: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    beds: {
      type: Number,
      required: true,
    },
  },
  address: {
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
    placeType: {
      type: String,
      required: false,
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
    enum: ['HOUSE', 'APARTMENT', 'RANCH', 'BED_AND_BREAKFAST'],
    default: 'HOUSE',
  },
  privacyType: {
    type: String,
    enum: ['ENTIRE_PLACE', 'PRIVATE_ROOM', 'SHARED_ROOM'],
  },
  amenities: {
    kitchen: [
      {
        type: String,
      },
    ],
    bathroom: [
      {
        type: String,
      },
    ],
    bedroomAndLaundry: [
      {
        type: String,
      },
    ],
    facilities: [
      {
        type: String,
      },
    ],
    entertainment: [
      {
        type: String,
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

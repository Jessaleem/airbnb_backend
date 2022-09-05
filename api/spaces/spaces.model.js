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
  dates: {
    type: Date,
    /* required: true, */
  },
  price: {
    type: Number,
    required: true,
  },
  coordinates: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  howMany: {
    type: Number,
    required: true,
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
    beds: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: String,
      /* required: true, */
    },
    bathrooms: {
      type: String,
      /*  required: true, */
    },
    kitchen: [
      {
        type: String,
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
      },
    ],
    facilities: [
      {
        type: String,
      },
    ],
    entertaiment: [
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

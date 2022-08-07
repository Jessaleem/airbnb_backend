const mongoose = require('mongoose');

const SpaceSchema = new mongoose.Schema ({
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
  how_many: {
    type: String,
    required: true,
  },
  adress: {
    "street": {
      type: String,
      required: true,
    }, 
    "city": {
      type: String,
      required: true,
    },
    "state": {
      type: String,
      required: true,
    },
    "country": {
      type: String,
      required: true,
    },
    "zip_code": {
      type: String,
      required: false,
    },
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  type: {
    "house": {
      type: Boolean,
      required: true,
    },
    "apartment": {
      type: Boolean,
      required: true,
    },
    "ranch": {
      type: Boolean,
      required: true,
    },
    "Bed_&_Breakfast": {
      type: Boolean,
      required: true,
    }
  },
  privacy_type:{
    "entire_place": {
      type: Boolean,
      required: true,
    },
    "private_room": {
      type: Boolean,
      required: true,
    },
    "shared_room": {
      type: Boolean,
      required: true,
    }
  },
  amenities:{
    "beds":{
      type: String,
      required: true,
    },
    "kitchen":{
      type: Array,
      of: String,
      required: true,
    },
    "bathroom":{
      type: Array,
      of: String,
      required: true,
    },
    "bedroom_and_laundry":{
      type: Array,
      of: String,
      required: true,
    },
    "facilities":{
      type: Array,
      of: String,
      required: true,
    },
    "entertaiment":{
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

const Space = mongoose.model("Space", SpaceSchema);

module.exports = Space; 


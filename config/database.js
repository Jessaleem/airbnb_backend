require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
  const URI = process.env.AIRBNB_MONGO_URI;
  try {
    mongoose.connect(URI);

    console.log('Connected to DB');
  } catch (error) {
    console.error('Error trying to connect with DB', error);
    process.exit(1);
  }
}

module.exports = connectDB;

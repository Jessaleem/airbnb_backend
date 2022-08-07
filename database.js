const mongoose = require('mongoose');

async function connectDB() {
  const URI = process.env.URI;
  try {    
    await mongoose.connect(URI)
    console.log('Connected to DB');
  } catch (error) {
    console.error('error trying to connect with DB', error)
    process.exit(1);
  }
}

module.exports = connectDB
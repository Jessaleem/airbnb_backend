require('dotenv').config();
const express = require('express');
const configExpress = require('./config/express');
const routes = require('./routes');
const connectDB = require('./config/database');

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  configExpress(app);

  await connectDB();

  routes(app);

  console.log(`Server running on port http://localhost:${PORT}`);
});

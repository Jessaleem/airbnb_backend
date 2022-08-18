const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

function configExpress(app) {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;

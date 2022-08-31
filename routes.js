const router = require('./api/healthcheck/index');
const space = require('./api/spaces/index');
const user = require('./api/users/index');
const reservation = require('./api/Reservation/index');
const authLocal = require('./auth/local');
const payment = require('./api/payment');
const upload = require('./api/upload');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/spaces', space);
  app.use('/api/users', user);
  app.use('/api/reservation', reservation);

  app.use('/auth/local', authLocal);
  app.use('/api/payment', payment);

  app.use('/api/upload', upload);
}

module.exports = routes;

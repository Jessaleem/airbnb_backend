const router = require('./api/healthcheck/index');
const space = require('./api/spaces/index');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/spaces', space);
}

module.exports = routes;

const app = require('express')();
const logger = require('./lib/logger')();

async function startServer (port) {
  const normalizedPort = normalizePort(port);

  try {
    const server = await app.listen(normalizedPort);

    // const store = require('../lib/pg-store');

    // set up routers
    // app.use('/habits', habitsRouter(store));

    logger.info('started habits', { port: normalizedPort });
    return server;
  } catch (err) {
    logger.error('failed to start habits', { port: normalizedPort, error: err });
    process.exit(1);
  }
}

function normalizePort (port) {
  const fallback = 80;
  try {
    const normalizedPort = parseInt(port);
    if (isNaN(normalizedPort)) {
      return fallback;
    }
    return normalizedPort;
  } catch (_) {
    return fallback;
  }
}

module.exports = startServer;

require('dotenv').config();
const app = require('./src/app');
const logger = require('./src/lib/logger')();

logger.info('starting habits');

app(process.env.PORT).then(server => {
  process.on('SIGTERM', shutdown(server));
  process.on('SIGINT', shutdown(server));
});

function shutdown () {
  return () => {
    logger.info('received shutdown signal');
    logger.info('shutdown complete');
    process.exit(0);
  };
}
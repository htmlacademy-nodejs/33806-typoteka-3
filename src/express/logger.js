'use strict';

const LOG_LEVEL = process.env.LOG_LEVEL;
const logger = LOG_LEVEL === `debug` ? require(`pino`)() : require(`pino`)(`logs`);

module.exports = {
  logger,
  getLogger(options = {
    name: `server`,
    level: LOG_LEVEL || `info`,
  }) {
    return logger.child(options);
  },
};

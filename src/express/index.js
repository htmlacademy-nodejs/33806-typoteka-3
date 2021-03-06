'use strict';

require(`dotenv`).config();
const app = require(`./server`);
const {getLogger} = require(`./logger`);
const logger = getLogger();
const DEFAULT_PORT = process.env.FRONTEND_PORT;

app.listen(DEFAULT_PORT, () => {
  logger.info(`Server running on port ${DEFAULT_PORT}`);
}).on(`error`, (err) => {
  logger.error(`Server can't start. Error: ${err}`);
});

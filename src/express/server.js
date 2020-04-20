'use strict';

const express = require(`express`);
const path = require(`path`);
const app = express();
const routes = require(`./routes`);
const logger = require(`pino-http`)({
  logger: require(`./logger`).getLogger()
});

app
  .set(`view engine`, `pug`)
  .set(`views`, path.join(__dirname + `/templates`))
  .use(express.static(path.join(__dirname + `/public`)))
  .use(logger)
  .use(`/`, routes)
  .disable(`x-powered-by`);

module.exports = app;

'use strict';

const express = require(`express`);
const app = express();
const routes = require(`../routes`);
const {API_PREFIX} = require(`../constants`);
const logger = require(`pino-http`)({
  logger: require(`../logger`).getLogger()
});

app
  .use(express.urlencoded({extended: false}))
  .use(logger)
  .use(API_PREFIX, routes)
  .disable(`x-powered-by`);

module.exports = app;

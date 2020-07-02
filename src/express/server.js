'use strict';

const express = require(`express`);
const path = require(`path`);
const app = express();
const routes = require(`./routes`);

app
  .set(`view engine`, `pug`)
  .set(`views`, path.join(__dirname + `/templates`))
  .use(express.static(path.join(__dirname + `/public`)))
  .use(`/`, routes)
  .disable(`x-powered-by`);

module.exports = app;

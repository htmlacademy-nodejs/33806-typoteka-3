'use strict';

const path = require(`path`);
const express = require(`express`);
const app = express();
const routes = require(`./routes`);

app
  .set(`view engine`, `pug`)
  .set(`views`, path.join(__dirname + `/templates`))
  .use(express.urlencoded({extended: true}))
  .use(express.static(path.join(__dirname + `/public`)))
  .use(`/`, routes)
  .use((req, res) => res.status(400).render(`errors/400`))
  .use((err, req, res) => res.status(500).render(`errors/500`))
  .disable(`x-powered-by`);

module.exports = app;

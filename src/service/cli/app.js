'use strict';

const express = require(`express`);
const app = express();
const routes = require(`../routes`);
const {API_PREFIX} = require(`../constants`);

app.use(express.urlencoded({extended: false}));
app.use(API_PREFIX, routes);

module.exports = app;

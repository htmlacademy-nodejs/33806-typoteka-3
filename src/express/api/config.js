'use strict';

require(`dotenv`).config();
const fetch = require(`node-fetch`);
const URL = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api`;
const api = (path, params) => fetch(`${URL}${path}`, params);

module.exports = api;

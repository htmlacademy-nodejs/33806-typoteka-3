'use strict';

require(`dotenv`).config();
const fetch = require(`node-fetch`);
const URL = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/api`;

const api = (path, body, method) => {
  const params = {
    method: method || `GET`,
    body: body ? JSON.stringify(body) : null,
    headers: {'Content-Type': `application/json`}
  };

  return fetch(`${URL}${path}`, params);
};

module.exports = api;

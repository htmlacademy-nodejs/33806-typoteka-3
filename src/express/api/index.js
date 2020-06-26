'use strict';

const api = require(`./config`);

const articles = {
  get: () => api(`/articles`)
};

module.exports = {
  articles,
};

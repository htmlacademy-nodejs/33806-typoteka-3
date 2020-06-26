'use strict';

const api = require(`./config`);

const articles = {
  get: () => api(`/articles`)
};

const categories = {
  get: () => api(`/categories`)
};

module.exports = {
  articles,
  categories,
};

'use strict';

const api = require(`./config`);

const articles = {
  get: () => api(`/articles`),
  add: (params) => api(`/articles/add`, params),
  update: (articleID, params) => api(`/articles/edit/${articleID}`, params),
};

const auth = {};

const categories = {
  get: () => api(`/categories`)
};

const my = {
  get: () => api(`/articles`),
  getComments: (articleID) => api(`/api/articles/${articleID}/comments`),
};

const search = {
  get: (params) => api(`/search`, params),
};

module.exports = {
  articles,
  auth,
  categories,
  my,
  search,
};

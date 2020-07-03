'use strict';

const api = require(`./config`);

const articles = {
  get: () => api(`/articles`),
  add: (body) => api(`/articles/add`, body, `POST`),
  edit: (articleID) => api(`/articles/edit/${articleID}`),
  getArticle: (articleID) => api(`/articles/${articleID}`),
};

const categories = {
  get: () => api(`/categories`)
};

const my = {
  get: () => api(`/articles`),
  post: (articleID) => api(`/articles/${articleID}`),
  getComments: (articleID, commentsCount) => api(`/articles/${articleID}/comments?commentsCount=${commentsCount}`),
};

const search = {
  post: (params) => api(`/search`, params, `POST`),
};

module.exports = {
  articles,
  categories,
  my,
  search,
};

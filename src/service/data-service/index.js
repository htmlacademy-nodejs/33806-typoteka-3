'use strict';

const ArticlesService = require(`./articles`);
const ArticleService = require(`./article`);
const CategoriesService = require(`./categories`);
const CommentsService = require(`./comments`);
const SearchService = require(`./search`);

module.exports = {
  ArticlesService,
  ArticleService,
  CategoriesService,
  CommentsService,
  SearchService,
};

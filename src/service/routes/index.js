'use strict';

const {Router} = require(`express`);
const app = new Router();
const articles = require(`./articles/articles`);
const categories = require(`./categories/categories`);
const comments = require(`./comments/comments`);
const search = require(`./search/search`);
const {ArticlesService, CommentsService, CategoriesService, SearchService} = require(`../models`);
const getMockData = require(`../lib/get-mock-data`);

(async () => {
  const mockData = await getMockData();

  articles(app, new ArticlesService(mockData));
  categories(app, new CategoriesService(mockData));
  comments(app, new CommentsService(mockData));
  search(app, new SearchService(mockData));
})();

module.exports = app;

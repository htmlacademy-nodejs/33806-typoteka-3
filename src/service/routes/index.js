'use strict';

const {Router} = require(`express`);
const app = new Router();
const articles = require(`./articles`);
const article = require(`./article`);
const categories = require(`./categories`);
const comments = require(`./comments`);
const search = require(`./search`);
const {ArticlesService, ArticleService, CommentsService, CategoriesService, SearchService} = require(`../models`);
const getMockData = require(`../lib/get-mock-data`);

(async () => {
  const mockData = await getMockData();

  articles(app, new ArticlesService(mockData));
  article(app, new ArticleService(mockData));
  categories(app, new CategoriesService(mockData));
  comments(app, new CommentsService(mockData));
  search(app, new SearchService(mockData));
})();

module.exports = app;

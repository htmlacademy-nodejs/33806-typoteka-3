'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../constants`);
const route = new Router();

module.exports = (app, articleService) => {
  app.use(`/articles`, route);

  route.get(`/`, (req, res) => {
    const articles = articleService.findAll();
    return res.status(HttpCode.OK).json(articles);
  });

  route.post(`/`, async (req, res) => {
    if (req.query.title) {
      return res.json(req.query);
    }

    return res.status(HttpCode.BAD_REQUEST).json({
      message: ResponseMessage.BAD_REQUEST,
      details: `The title is not set`
    });
  });
};

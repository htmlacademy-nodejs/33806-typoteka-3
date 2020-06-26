'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../constants`);
const route = new Router();

module.exports = (app, articleService) => {
  app.use(`/article`, route);

  route.get(`/:articleID`, async (req, res) => {
    const post = articleService.find(req.params.articleID);

    if (post) {
      return res.json(post);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });

  route.put(`/:articleID`, async (req, res) => {
    const post = articleService.update(req.params.articleID);
    const query = req.query;

    if (post) {
      return res.json({...post, ...query});
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });

  route.delete(`/:articleID`, async (req, res) => {
    const articles = articleService.delete(req.params.articleID);

    if (articles.length) {
      return res.json(articles);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });
};

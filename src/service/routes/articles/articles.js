'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../../constants`);
const route = new Router();
const articleValidator = require(`../../middlewares/article-validator`);

module.exports = (app, articleService) => {
  app.use(`/articles`, route);

  route.get(`/`, async (req, res) => {
    const articles = await articleService.findAll();
    return res.status(HttpCode.OK).json(articles);
  });

  route.get(`/:articleID`, async (req, res) => {
    const post = await articleService.find(req.params.articleID);

    if (post) {
      return res.json(post);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });

  route.post(`/add`, articleValidator, async (req, res) => {
    if (req.body) {
      const newPost = await articleService.add(req.body);
      return res.json(newPost);
    }

    return res.status(HttpCode.BAD_REQUEST).json({
      message: ResponseMessage.BAD_REQUEST,
      details: `The name is not set`
    });
  });

  route.put(`/edit/:articleID`, async (req, res) => {
    const post = await articleService.edit(req.params.articleID);

    if (post) {
      return res.json(post);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });

  route.delete(`/:articleID`, async (req, res) => {
    const articles = await articleService.delete(req.params.articleID);

    if (articles.length) {
      return res.json(articles);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });
};

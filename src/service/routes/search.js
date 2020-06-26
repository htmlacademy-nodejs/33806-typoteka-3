'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../constants`);
const route = new Router();

module.exports = (app, service) => {
  app.use(`/search`, route);

  route.get(`/`, (req, res) => {
    if (req.query.title) {
      const posts = service.find(req.query.title);
      return res.json(posts);
    }

    return res.status(HttpCode.BAD_REQUEST).json({
      message: ResponseMessage.BAD_REQUEST,
      details: `The title is not set`
    });
  });
};

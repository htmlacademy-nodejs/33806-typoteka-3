'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../../constants`);
const route = new Router();
const searchValidator = require(`../../middlewares/search-validator`);

module.exports = (app, service) => {
  app.use(`/search`, route);

  route.post(`/`, searchValidator, (req, res) => {
    if (req.body.value) {
      const posts = service.find(req.body.value);
      return res.json(posts);
    }

    return res.status(HttpCode.BAD_REQUEST).json({
      message: ResponseMessage.BAD_REQUEST,
      details: `The value is not set`
    });
  });
};

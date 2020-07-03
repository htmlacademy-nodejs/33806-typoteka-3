'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../../constants`);
const route = new Router();

module.exports = (app, service) => {
  app.use(`/search`, route);

  route.post(`/`, (req, res) => {
    console.log(req.body);
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

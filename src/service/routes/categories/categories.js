'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../../constants`);
const route = new Router();

module.exports = (app, service) => {
  app.use(`/categories`, route);

  route.get(`/`, (req, res) => {
    const categories = service.findAll();

    if (categories) {
      return res.json(Array.from(categories));
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });
};

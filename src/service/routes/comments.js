'use strict';

const {Router} = require(`express`);
const {HttpCode, ResponseMessage} = require(`../constants`);
const route = new Router();

module.exports = (app, service) => {
  app.use(`/articles`, route);

  route.get(`/:articleID/comments`, (req, res) => {
    const comments = service.findAll(req.params.articleID);

    if (comments.length) {
      return res.json(comments);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });

  route.post(`/:articleID/comments`, async (req, res) => {
    if (req.query.text) {
      return res.json(req.query);
    }

    return res.status(HttpCode.BAD_REQUEST).json({
      message: ResponseMessage.BAD_REQUEST,
      details: `The text is not set`
    });
  });

  route.delete(`/:articleID/comments/:commentID`, async (req, res) => {
    const comments = service.delete(req.params.articleID, req.params.commentID);

    if (comments) {
      return res.json(comments);
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  });
};

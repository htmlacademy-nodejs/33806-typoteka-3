'use strict';

const {HttpCode} = require(`../constants`);

const articleKeys = [`value`];

module.exports = (req, res, next) => {
  const article = req.body;
  const keys = Object.keys(article);
  const keysExists = articleKeys.every((key) => keys.includes(key));

  if (!keysExists) {
    return res.status(HttpCode.BAD_REQUEST)
      .send(`Bad request`);
  }

  return next();
};

'use strict';

const {Router} = require(`express`);
const homeRouter = Router(); // eslint-disable-line new-cap
const api = require(`../../api`);

homeRouter.get(`/`, (req, res) => {
  api.articles.get()
    .then((data) => data.json())
    .then((articles) => res.render(`main`, {articles}))
    .catch((error) => console.error(error));
});

module.exports = homeRouter;

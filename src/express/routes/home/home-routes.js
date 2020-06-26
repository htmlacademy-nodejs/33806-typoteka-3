'use strict';

const {Router} = require(`express`);
const homeRouter = Router(); // eslint-disable-line new-cap
const api = require(`../../api`);

homeRouter.get(`/`, async (req, res) => {
  try {
    const articles = await api.articles.get().then((data) => data.json());
    const categories = await api.categories.get().then((data) => data.json());
    res.render(`main`, {articles, categories});
  } catch (error) {
    console.error(error);
  }
});

module.exports = homeRouter;

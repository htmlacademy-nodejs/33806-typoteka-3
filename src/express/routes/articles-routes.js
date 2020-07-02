'use strict';

const {Router} = require(`express`);
const articlesRouter = Router(); // eslint-disable-line new-cap
const api = require(`../api`);

articlesRouter
  .get(`/category/:id`, (req, res) => res.render(`articles-by-category`))
  .get(`/add`, (req, res) => res.send(`/offers/add`))
  .get(`/edit/:id`, (req, res) => res.send(`/offers/edit/${req.params.id}`))
  .get(`/:id`, async (req, res) => {
    try {
      const article = await api.articles.getArticle(req.params.id).then((data) => data.json());
      return res.render(`articles/single`, {article});
    } catch (e) {
      return res.render(`errors/400`);
    }
  });

module.exports = articlesRouter;

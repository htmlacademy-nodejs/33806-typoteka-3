'use strict';

const {Router} = require(`express`);
const searchRouter = Router(); // eslint-disable-line new-cap
const api = require(`../api`);

searchRouter
  .get(`/`, (req, res) => res.render(`search`))
  .post(`/`, async (req, res) => {
    try {
      const response = await api.search.post(req.body).then((data) => data.json());

      if (response.length) {
        return res.render(`search`, {articles: response});
      }

      return res.render(`search`, req.body);
    } catch (e) {
      return res.render(`search`, req.body);
    }
  });

module.exports = searchRouter;

'use strict';

const {Router} = require(`express`);
const offersRouter = Router(); // eslint-disable-line new-cap

offersRouter
  .get(`/category/:id`, (req, res) => res.send(`/offers/category/:id`))
  .get(`/add`, (req, res) => res.send(`/offers/add`))
  .get(`/edit/:id`, (req, res) => res.send(`/offers/edit/:id`))
  .get(`/:id`, (req, res) => res.send(`/offers/:id`));

module.exports = offersRouter;

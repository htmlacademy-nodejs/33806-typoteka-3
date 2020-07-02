'use strict';

const {Router} = require(`express`);
const adminRouter = Router(); // eslint-disable-line new-cap

adminRouter
  .get(`/`, (req, res) => res.render(`admin/my`))
  .get(`/comments`, (req, res) => res.render(`admin/comments`))
  .get(`/new`, (req, res) => res.render(`admin/new-post`))
  .get(`/categories`, (req, res) => res.render(`admin/all-categories`));

module.exports = adminRouter;

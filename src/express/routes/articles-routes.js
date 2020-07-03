'use strict';

const path = require(`path`);
const {Router} = require(`express`);
const multer = require(`multer`);
const articlesRouter = Router(); // eslint-disable-line new-cap
const api = require(`../api`);

const upload = multer({dest: path.resolve(__dirname, `../../uploads`)});

articlesRouter
  .get(`/category/:id`, (req, res) => res.render(`articles-by-category`))
  .get(`/add`, (req, res) => res.render(`admin/new-post`))
  .post(`/add`, upload.single(`file`), async (req, res) => {
    try {
      const response = await api.articles.add({...req.body, file: req.file}).then((data) => data.json());

      if (response.id) {
        return res.redirect(`/my`);
      }

      return res.render(`admin/new-post`, req.body);
    } catch (e) {
      console.log(`e`, e);
      return res.render(`admin/new-post`, req.body);
    }
  })
  .get(`/edit/:id`, (req, res) => res.send(`/articles/edit/${req.params.id}`))
  .get(`/:id`, async (req, res) => {
    try {
      const article = await api.articles.getArticle(req.params.id).then((data) => data.json());
      return res.render(`articles/single`, {article});
    } catch (e) {
      return res.render(`errors/400`);
    }
  });

module.exports = articlesRouter;

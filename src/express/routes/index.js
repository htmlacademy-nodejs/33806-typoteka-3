'use strict';

const {Router} = require(`express`);
const router = new Router();

const homeRouter = require(`./home-routes`);
const myRouter = require(`./my-routes`);
const articlesRouter = require(`./articles-routes`);
const searchRouter = require(`./search-routes`);
const loginRouter = require(`./login-routes`);
const registerRouter = require(`./register-routes`);
const adminRouter = require(`./admin-routes`);

router
  .use(`/articles`, articlesRouter)
  .use(`/my`, myRouter)
  .use(`/search`, searchRouter)
  .use(`/login`, loginRouter)
  .use(`/register`, registerRouter)
  .use(`/admin`, adminRouter)
  .use(`/`, homeRouter);

module.exports = router;

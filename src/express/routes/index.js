'use strict';

const {Router} = require(`express`);
const router = new Router();

const homeRouter = require(`./home/home-routes`);
const offersRouter = require(`./offers/offers-routes`);
const searchRouter = require(`./search/search-routes`);
const loginRouter = require(`./login/login-routes`);
const registerRouter = require(`./register/register-routes`);
const adminRouter = require(`./admin/admin-routes`);

router
  .use(`/offers`, offersRouter)
  .use(`/search`, searchRouter)
  .use(`/login`, loginRouter)
  .use(`/register`, registerRouter)
  .use(`/admin`, adminRouter)
  .use(`/`, homeRouter);

module.exports = router;

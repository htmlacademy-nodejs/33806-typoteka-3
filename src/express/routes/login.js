'use strict';

const {Router} = require(`express`);
const loginRouter = Router(); // eslint-disable-line new-cap

loginRouter.get(`/`, (req, res) => res.send(`/login`));

module.exports = loginRouter;

'use strict';

const {Router} = require(`express`);
const searchRouter = Router(); // eslint-disable-line new-cap

searchRouter.get(`/`, (req, res) => res.send(`/search`));

module.exports = searchRouter;

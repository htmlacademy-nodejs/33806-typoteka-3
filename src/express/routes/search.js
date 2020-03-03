'use strict';

const {Router} = require(`express`);
const searchRouter = Router(); // eslint-disable-line new-cap

searchRouter.get(`/`, (req, res) => res.render(`search`));

module.exports = searchRouter;

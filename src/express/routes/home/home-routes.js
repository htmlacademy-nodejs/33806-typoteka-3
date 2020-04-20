'use strict';

const {Router} = require(`express`);
const homeRouter = Router(); // eslint-disable-line new-cap

homeRouter.get(`/`, (req, res) => res.render(`main`));

module.exports = homeRouter;

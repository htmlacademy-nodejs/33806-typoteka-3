'use strict';

const {Router} = require(`express`);
const registerRouter = Router(); // eslint-disable-line new-cap

registerRouter.get(`/`, (req, res) => res.render(`auth/register`));

module.exports = registerRouter;

'use strict';

const {Router} = require(`express`);
const myRouter = Router(); // eslint-disable-line new-cap

myRouter.get(`/`, (req, res) => res.send(`/my`));
myRouter.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = myRouter;

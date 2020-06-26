'use strict';

const fetch = require(`node-fetch`);
const {Router} = require(`express`);
const homeRouter = Router(); // eslint-disable-line new-cap

// homeRouter.get(`/`, (req, res) => res.render(`main`));
homeRouter.get(`/`, (req, res) => {
  fetch(`http://localhost:3000/api/articles`)
    .then((data) => data.json())
    .then((articles) => res.render(`main`, {articles}))
    .catch((error) => console.error(error));
});

module.exports = homeRouter;

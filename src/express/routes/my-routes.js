'use strict';

const {Router} = require(`express`);
const myRouter = Router(); // eslint-disable-line new-cap
const api = require(`../api`);

myRouter.get(`/`, async (req, res) => {
  try {
    const articles = await api.my.get().then((data) => data.json());

    res.render(`admin/publications`, {articles});
  } catch (error) {
    console.error(error);
  }
});

myRouter.get(`/comments`, async (req, res) => {
  try {
    const comments = await api.my.getComments(
        `RIBuHrW2XYb-oLZdLqFVy`, // TODO: real id
        3
    ).then((data) => data.json());

    res.render(`admin/comments`, {comments});
  } catch (error) {
    console.error(error);
  }
});

module.exports = myRouter;

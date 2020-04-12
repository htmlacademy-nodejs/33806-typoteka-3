'use strict';

const fs = require(`fs`).promises;
const express = require(`express`);
const app = express();
const {DEFAULT_PORT, MOCK_FILENAME, HttpCode, ResponseMessage, NodeExceptions} = require(`../constants`);

const dbMiddleware = async (req, res, next) => {
  try {
    const fileContent = await fs.readFile(MOCK_FILENAME, `utf-8`);
    res.locals.data = JSON.parse(fileContent);
    next();
  } catch (err) {
    if (err.code === NodeExceptions.ENOENT) {
      res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
    }

    res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: ResponseMessage.SERVER_ERROR});
  }
};

app.use(express.urlencoded({extended: false}));
app.use(dbMiddleware);

// Articles
app.get(`/api/articles`, async (req, res) => res.json(res.locals.data));

app.post(`/api/articles`, async (req, res) => {
  if (req.query.title) {
    return res.json(req.query);
  }

  return res.status(HttpCode.BAD_REQUEST).json({
    message: ResponseMessage.BAD_REQUEST,
    details: `The title is not set`
  });
});

// Article
app.get(`/api/articles/:articleID`, async (req, res) => {
  const post = res.locals.data.filter((article) => article.id === req.params.articleID)[0];

  if (post) {
    return res.json(post);
  }

  return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
});

app.put(`/api/articles/:articleID`, async (req, res) => {
  const post = res.locals.data.filter((article) => article.id === req.params.articleID)[0];
  const query = req.query;

  if (post) {
    return res.json({...post, ...query});
  }

  return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
});

app.delete(`/api/articles/:articleID`, async (req, res) => {
  const data = res.locals.data;
  const post = data.filter((article) => article.id === req.params.articleID)[0];

  if (post) {
    return res.json(data.filter((article) => article.id !== req.params.articleID));
  }

  return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
});

// Comments
app.get(`/api/articles/:articleID/comments`, async (req, res) => {
  const post = res.locals.data.filter((article) => article.id === req.params.articleID)[0];

  if (post) {
    return res.json(post.comments);
  }

  return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
});

app.post(`/api/articles/:articleID/comments`, async (req, res) => {
  if (req.query.text) {
    return res.json(req.query);
  }

  return res.status(HttpCode.BAD_REQUEST).json({
    message: ResponseMessage.BAD_REQUEST,
    details: `The text is not set`
  });
});

// Comment
app.delete(`/api/articles/:articleID/comments/:commentID`, async (req, res) => {
  const post = res.locals.data.filter((article) => article.id === req.params.articleID)[0];

  if (post) {
    const comment = post.comments.filter((item) => item.id === req.params.commentID);

    if (comment) {
      return res.json(post.comments.filter((item) => item.id !== req.params.commentID));
    }

    return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
  }

  return res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
});

// Categories
app.get(`/api/categories`, async (req, res) => {
  const categories = new Set(res.locals.data.map((article) => article.category).join(`,`).split(`,`));
  return res.json(Array.from(categories));
});

// Search
app.get(`/api/search`, async (req, res) => {
  if (req.query.title) {
    const posts = res.locals.data.filter((article) => article.title.includes(req.query.title));
    return res.json(posts);
  }

  return res.status(HttpCode.BAD_REQUEST).json({
    message: ResponseMessage.BAD_REQUEST,
    details: `The title is not set`
  });
});

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port,
        () => console.log(`Server is running at: ${port}`));
  }
};

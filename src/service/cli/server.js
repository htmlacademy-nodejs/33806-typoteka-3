'use strict';

const fs = require(`fs`).promises;
const express = require(`express`);
const app = express();
const {DEFAULT_PORT, MOCK_FILENAME, HttpCode, ResponseMessage, NodeExceptions} = require(`../constants`);

app.use(express.urlencoded({extended: false}));

app.get(`/posts`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(MOCK_FILENAME, `utf-8`);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    if (err.code === NodeExceptions.ENOENT) {
      res.status(HttpCode.NOT_FOUND).json({message: ResponseMessage.NOT_FOUND});
      return;
    }

    res.status(HttpCode.INTERNAL_SERVER_ERROR).json({message: ResponseMessage.SERVER_ERROR});
  }
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

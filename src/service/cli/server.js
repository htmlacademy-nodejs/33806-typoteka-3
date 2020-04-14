'use strict';

const {DEFAULT_PORT} = require(`../constants`);
const app = require(`./app/app`);

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port,
        () => console.log(`Server is running at: ${port}`));
  }
};

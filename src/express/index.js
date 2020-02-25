'use strict';

const express = require(`express`);
const DEFAULT_PORT = 8080;
const app = express();
const {requireRoutes} = require(`./utils`);

app.get(`/`, (req, res) => res.send(`Hello, Express.js!`));
requireRoutes({app, fullPath: `src/express/routes`, dirName: `./routes`});

app.listen(DEFAULT_PORT,
    () => console.log(`Server is running at: ${DEFAULT_PORT}`));

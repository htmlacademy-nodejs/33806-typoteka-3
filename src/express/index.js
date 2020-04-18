'use strict';

const express = require(`express`);
const path = require(`path`);
const DEFAULT_PORT = 8080;
const app = express();
const {requireRoutes} = require(`./utils`);

app.set(`view engine`, `pug`);
app.set(`views`, path.join(__dirname + `/templates`));
app.use(express.static(path.join(__dirname + `/public`)));

app.get(`/`, (req, res) => res.render(`main`));
requireRoutes({app, fullPath: `src/express/routes`, dirName: `./routes`});

app.listen(DEFAULT_PORT,
    () => console.log(`Server is running at: http://localhost:${DEFAULT_PORT}`));

module.exports = app;

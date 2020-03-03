'use strict';

const fs = require(`fs`).promises;

async function requireRoutes({app, fullPath, dirName}) {
  try {
    const paths = await fs.readdir(fullPath, `utf-8`);
    paths.forEach((fileName) => {
      const router = require(`${dirName}/${fileName}`);
      const path = fileName.replace(/\.js/, ``);
      app.use(`/${path}`, router);
    });
  } catch (error) {
    console.log(`error`, error);
    process.exit(1);
  }
}

module.exports = {
  requireRoutes,
};

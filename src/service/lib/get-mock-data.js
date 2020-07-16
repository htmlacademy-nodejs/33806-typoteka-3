'use strict';

const fs = require(`fs`).promises;
const {MOCK_FILENAME} = require(`../constants`);

let data = [];

const getMockData = async () => {
  if (data.length > 0) {
    return data;
  }

  try {
    const fileContent = await fs.readFile(MOCK_FILENAME, `utf-8`);
    data = JSON.parse(fileContent);
  } catch (err) {
    console.log(err);
  }

  return data;
};

module.exports = getMockData;

'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const nanoid = require(`nanoid`).nanoid;
const {ExitCode} = require(`./constants`);

const MAX_ANNOUNCE_COUNT = 5;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffle = (array) => {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomPosition = Math.floor(Math.random() * index);
    [array[index], array[randomPosition]] = [array[randomPosition], array[index]];
  }

  return array;
};

const getDaysInMonth = (m, y) => {
  if (m === 2) {
    return !((y % 4) || (!(y % 100) && (y % 400))) ? 29 : 28;
  }

  return 30 + ((m >> 3 ^ m) & 1);
};

const getRandomDate = (originalDate) => {
  const date = new Date(originalDate.setMonth(originalDate.getMonth() - getRandomInt(0, 2)));
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysCount = getDaysInMonth(month, year);

  date.setDate(getRandomInt(0, daysCount));
  date.setHours(getRandomInt(0, 24));
  date.setMinutes(getRandomInt(1, 60));
  date.setSeconds(getRandomInt(1, 60));

  return new Date(date).toLocaleString(`ru`, {
    year: `numeric`,
    month: `2-digit`,
    day: `2-digit`,
    hour: `2-digit`,
    minute: `2-digit`,
    second: `2-digit`
  }).replace(/\./g, `-`);
};

const getDataFromFile = async (file) => {
  let str;

  try {
    str = await fs.readFile(file, `utf-8`);
  } catch (err) {
    console.error(chalk.red(`Can't read data from file`, err));
    process.exit(ExitCode.fail);
  }

  return str.trim().split(`\n`);
};

const generateOffers = async (count) => {
  const [TITLES, CATEGORIES, ANNOUNCES, FULL_TEXTS, COMMENTS] = await Promise.all([
    getDataFromFile(`data/titles.txt`),
    getDataFromFile(`data/categories.txt`),
    getDataFromFile(`data/sentences.txt`),
    getDataFromFile(`data/sentences.txt`),
    getDataFromFile(`data/comments.txt`)
  ]);

  return (
    Array(count).fill({}).map(() => ({
      id: nanoid(),
      title: TITLES[getRandomInt(0, TITLES.length - 1)],
      category: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length - 1)),
      announce: shuffle(ANNOUNCES).slice(0, getRandomInt(1, MAX_ANNOUNCE_COUNT)).join(` `),
      fullText: shuffle(FULL_TEXTS).slice(0, getRandomInt(1, FULL_TEXTS.length - 1)).join(` `),
      createdDate: getRandomDate(new Date()),
      comments: shuffle(COMMENTS).slice(0, getRandomInt(1, COMMENTS.length - 1)).map((comment) => ({
        id: nanoid(),
        text: comment,
      })),
    }))
  );
};

const makeMockData = async (filename, data) => {
  try {
    await fs.writeFile(filename, data);
    console.log(chalk.green(`The file has been saved!`));
  } catch (error) {
    console.error(chalk.red(`Can't write data to file`));
  }
};

module.exports = {generateOffers, makeMockData};

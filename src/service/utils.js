'use strict';

const fs = require(`fs`);
const {TITLES, ANNOUNCES, FULL_TEXTS, CATEGORIES} = require(`./mockData`);
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

// TODO: чужой код; понять что здесь происходит либо заменить на moment.js
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

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length - 1)],
    category: shuffle(CATEGORIES).slice(0, getRandomInt(1, CATEGORIES.length - 1)),
    announce: shuffle(ANNOUNCES).slice(0, getRandomInt(1, MAX_ANNOUNCE_COUNT)).join(` `),
    fullText: shuffle(FULL_TEXTS).slice(0, getRandomInt(1, FULL_TEXTS.length - 1)).join(` `),
    createdDate: getRandomDate(new Date()),
  }))
);

const makeMockData = (filename, data) => {
  fs.writeFileSync(filename, data, (err) => {
    if (err) {
      console.error(`Can't write data to file`);
    }

    console.log(`The file has been saved!`);
  });
};

module.exports = {generateOffers, makeMockData};

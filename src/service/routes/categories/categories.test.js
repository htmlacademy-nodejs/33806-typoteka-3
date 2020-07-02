'use strict';

const fs = require(`fs`).promises;
const request = require(`supertest`);
const app = require(`../../app`);

describe(`GET /categories`, function () {
  // eslint-disable-next-line no-unused-vars
  let mockArticle = null;

  beforeAll(async function () {
    mockArticle = JSON.parse((await fs.readFile(`mocks.json`)))[0];
  });

  it(`responds status 200`, async (done) => {
    const res = await request(app).get(`/api/categories`);
    expect(res.statusCode).toBe(200);
    done();
  });
});

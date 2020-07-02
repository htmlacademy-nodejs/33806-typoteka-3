'use strict';

const fs = require(`fs`).promises;
const request = require(`supertest`);
const app = require(`../../app`);

describe(`GET /article/:id`, function () {
  let mockArticle = null;
  let articleID = 0;

  beforeAll(async function () {
    mockArticle = JSON.parse((await fs.readFile(`mocks.json`)))[0];
    articleID = mockArticle.id;
  });

  it(`responds with status 200`, async (done) => {
    const res = await request(app).get(`/api/article/${articleID}`);
    expect(res.statusCode).toBe(200);
    done();
  });

  it(`responds with json`, async (done) => {
    const res = await request(app).get(`/api/article/${articleID}`);
    expect(res.body).toEqual(mockArticle);
    done();
  });

  it(`responds with 404 when does not find the article`, async (done) => {
    const res = await request(app).get(`/api/article/123`);
    expect(res.statusCode).toBe(404);
    done();
  });
});

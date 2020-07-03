'use strict';

const fs = require(`fs`).promises;
const request = require(`supertest`);
const app = require(`../../app`);

describe(`Articles`, function () {
  let mockArticles = null;
  let articleID = 0;

  beforeAll(async function () {
    mockArticles = JSON.parse((await fs.readFile(`mocks.json`)));
    articleID = mockArticles[0].id;
  });

  it(`GET /articles with status 200`, async (done) => {
    const res = await request(app).get(`/api/articles`);
    expect(res.statusCode).toBe(200);
    done();
  });

  it(`GET /article/firstArticle`, async (done) => {
    const res = await request(app).get(`/api/articles/${articleID}`);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual(mockArticles[0]);
    done();
  });
});

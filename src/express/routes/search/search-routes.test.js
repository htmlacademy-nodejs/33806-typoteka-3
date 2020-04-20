'use strict';

const request = require(`supertest`);
const app = require(`../../server`);

describe(`Search API end-points`, () => {
  it(`get /search with status code 200`, async (done) => {
    const response = await request(app).get(`/search`);
    expect(response.status).toBe(200);
    done();
  });
});

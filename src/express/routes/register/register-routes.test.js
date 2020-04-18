'use strict';

const request = require(`supertest`);
const app = require(`../../server`);

describe(`Register API end-points`, () => {
  it(`get /register with status code 200`, async (done) => {
    const response = await request(app).get(`/register`);
    expect(response.status).toBe(200);
    done();
  });
});

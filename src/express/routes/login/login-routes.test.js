'use strict';

const request = require(`supertest`);
const app = require(`../../server`);

describe(`Login API end-points`, () => {
  it(`get /login with status code 200`, async (done) => {
    const response = await request(app).get(`/login`);
    expect(response.status).toBe(200);
    done();
  });
});

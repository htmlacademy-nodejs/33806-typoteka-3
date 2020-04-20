'use strict';

const request = require(`supertest`);
const app = require(`../../server`);

describe(`Home Page end-point`, () => {
  it(`get / with status code 200`, async (done) => {
    const response = await request(app).get(`/`);
    expect(response.status).toBe(200);
    done();
  });
});

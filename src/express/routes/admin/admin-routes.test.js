'use strict';

const request = require(`supertest`);
const app = require(`../../server`);

describe(`Admin API end-points`, () => {
  it(`get /admin with status code 200`, async (done) => {
    const response = await request(app).get(`/admin`);
    expect(response.status).toBe(200);
    done();
  });

  it(`get /admin/comments with status code 200`, async (done) => {
    const response = await request(app).get(`/admin/comments`);
    expect(response.status).toBe(200);
    done();
  });

  it(`get /admin/new with status code 200`, async (done) => {
    const response = await request(app).get(`/admin/new`);
    expect(response.status).toBe(200);
    done();
  });

  it(`get /admin/categories with status code 200`, async (done) => {
    const response = await request(app).get(`/admin/categories`);
    expect(response.status).toBe(200);
    done();
  });
});

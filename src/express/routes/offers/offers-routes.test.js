'use strict';

const request = require(`supertest`);
const app = require(`../../server`);

describe(`Offers API end-points`, () => {
  it(`get /offers/category/:id with status code 200`, async (done) => {
    const response = await request(app).get(`/offers/category/123`);
    expect(response.status).toBe(200);
    done();
  });

  it(`get /offers/add with status code 200`, async (done) => {
    const response = await request(app).get(`/offers/add`);
    expect(response.status).toBe(200);
    done();
  });

  it(`get /offers/edit/:id with status code 200`, async (done) => {
    const response = await request(app).get(`/offers/edit/123`);
    expect(response.status).toBe(200);
    done();
  });

  it(`get /offers/:id with status code 200`, async (done) => {
    const response = await request(app).get(`/offers/123`);
    expect(response.status).toBe(200);
    done();
  });
});

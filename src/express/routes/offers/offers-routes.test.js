'use strict';

const request = require(`supertest`);
const app = require(`../../index`);

describe.skip(`Offers API end-points`, () => {
  test(`When get /offers/category/:id status code should be 200`, function (done) {
    request(app)
      .get(`/category/123`)
      .expect(200, done);
  });

  test(`When get /offers/add status code should be 200`, function (done) {
    request(app)
      .get(`/offers/add`)
      .expect(200, done);
  });

  test(`When get /offers/edit/:id status code should be 200`, function (done) {
    request(app)
      .get(`/offers/edit/123`)
      .expect(200, done);
  });

  test(`When get /offers/:id status code should be 200`, function (done) {
    request(app)
      .get(`/offers/123`)
      .expect(200, done);
  });
});

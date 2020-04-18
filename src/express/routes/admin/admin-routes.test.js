'use strict';

const request = require(`supertest`);
const app = require(`../../index`);

describe(`Admin API end-points`, () => {
  test(`When get /admin status code should be 200`, function (done) {
    request(app)
      .get(`/admin`)
      .expect(200, done);
  });

  test(`When get /admin/comments status code should be 200`, function (done) {
    request(app)
      .get(`/admin/comments`)
      .expect(200, done);
  });

  test(`When get /admin/new status code should be 200`, function (done) {
    request(app)
      .get(`/admin/new`)
      .expect(200, done);
  });

  test(`When get /admin/categories status code should be 200`, function (done) {
    request(app)
      .get(`/admin/categories`)
      .expect(200, done);
  });
});

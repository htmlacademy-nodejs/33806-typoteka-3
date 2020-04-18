'use strict';

const request = require(`supertest`);
const app = require(`../../index`);

describe(`Login API end-points`, () => {
  it(`When get /login status code should be 200`, function (done) {
    request(app)
      .get(`/login`)
      .expect(200, done);
  });
});

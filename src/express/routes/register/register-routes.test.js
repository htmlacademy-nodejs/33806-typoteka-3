'use strict';

const request = require(`supertest`);
const app = require(`../../index`);

describe(`Register API end-points`, () => {
  test(`When get /register code should be 200`, function (done) {
    request(app)
      .get(`/register`)
      .expect(200, done);
  });
});

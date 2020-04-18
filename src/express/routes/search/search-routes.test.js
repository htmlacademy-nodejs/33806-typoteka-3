'use strict';

const request = require(`supertest`);
const app = require(`../../index`);

describe(`Search API end-points`, () => {
  it(`When get /search code should be 200`, function (done) {
    request(app)
      .get(`/search`)
      .expect(200, done);
  });
});

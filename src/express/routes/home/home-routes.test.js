'use strict';

const request = require(`supertest`);
const app = require(`../../index`);

describe.skip(`Main Page end-point`, () => {
  test(`When get / status code should be 200`, function (done) {
    request(app)
      .get(`/`)
      .expect(200, done);
  });
});

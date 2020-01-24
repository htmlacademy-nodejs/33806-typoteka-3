'use strict';

const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = 3000;
const MOCK_FILENAME = `mocks.json`;
const USER_ARGV_INDEX = 2;
const ExitCode = {
  success: 0,
  fail: 1
};
const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};

module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  MOCK_FILENAME,
  USER_ARGV_INDEX,
  ExitCode,
  HttpCode,
};

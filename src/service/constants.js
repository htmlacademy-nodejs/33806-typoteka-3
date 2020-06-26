'use strict';

require(`dotenv`).config();

const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = process.env.SERVER_PORT;
const MOCK_FILENAME = `mocks.json`;
const USER_ARGV_INDEX = 2;
const ExitCode = {
  success: 0,
  fail: 1
};
const HttpCode = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
};
const ResponseMessage = {
  NOT_FOUND: `Not found`,
  SERVER_ERROR: `Internal Server Error`,
  BAD_REQUEST: `400 Bad Request`,
};
const NodeExceptions = {
  ENOENT: `ENOENT`,
};

module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  MOCK_FILENAME,
  USER_ARGV_INDEX,
  ExitCode,
  HttpCode,
  ResponseMessage,
  NodeExceptions,
};

'use strict';

const app = require(`./server`);
const DEFAULT_PORT = 8080;

app.listen(DEFAULT_PORT,
    () => console.log(`Server is running at: http://localhost:${DEFAULT_PORT}`));

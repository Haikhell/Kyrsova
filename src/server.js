const http = require('http');

const dbHelper = require('./db');
const CONSTANTS = require('./const');
const config = require('./config');

(async () => {
  await dbHelper.func();

  const app = require('./app');

  const httpServer = http.createServer(app);

  httpServer.listen(config.PORT, config.HOST);
})();

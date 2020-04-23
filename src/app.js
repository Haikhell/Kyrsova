const cors = require('cors');
const helmet = require('helmet');

const express = require('express');
const bodyParser = require('body-parser');
const lodashTemplates = require('lodash-express');

const routes = require('./routes');

const app = express();

lodashTemplates(app, 'html');

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: '500kb' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);
module.exports = app;

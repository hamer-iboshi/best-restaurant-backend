const dotenv = require('dotenv');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

dotenv.config();
const env = process.env.NODE_ENV || 'development';

const server = express();

server.use(cors());
server.use(routes);
server.listen(process.env.PORT);

module.exports = server;
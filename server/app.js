require('dotenv').config();
const Server = require('./models/server');
const server = new Server();

// need to add in case of self-signed certificate connection
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

server.listen();
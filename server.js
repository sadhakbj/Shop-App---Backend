const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8081;

const server = http.createServer(app);

server.listen(port);
console.log('Server started at http://localhost:8081');
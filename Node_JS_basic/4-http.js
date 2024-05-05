// Create a small HTTP server using Node's HTTP module

const http = require('http');

const handleRequest = (_, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
};

const app = http.createServer(handleRequest);
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

module.exports = app;

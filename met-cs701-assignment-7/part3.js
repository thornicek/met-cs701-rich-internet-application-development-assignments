const http = require("http");
const url = require("url");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const parsedURL = url.parse(req.url, true);
  
  if (parsedURL.pathname == "/") {
    if (parsedURL.query.firstName && parsedURL.query.secondName) {
      res.end(
        `Hello ${parsedURL.query.firstName} ${parsedURL.query.secondName}`
      );
    } else {
      res.end("Hello, stranger");
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

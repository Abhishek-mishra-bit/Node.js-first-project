const http = require("http");
const fs = require("fs");
function serveStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("500 - Internal Error");
    } else {
      res.writeHead(responseCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
}
const server = http.createServer(function (req, res) {
  // normalize url by removing querystring, optional
  // trailing slash, and making lowercase
  var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFile(res, "/public/home.html", "text/json");
      break;
    case "/about":
      serveStaticFile(res, "/public/about.html", "text/json");
      break;

    default:
      serveStaticFile(res, "/public/404.html", "text/html", 404);
      break;
  }
});

const port = 3000; // Change the port number to 3000 or any other available port
server.listen(port, () => {
  console.log(`Server listening on port ${port} to terminate use ctrl+c`);
});

const http = require("http");

const server = http.createServer((req, res) => {
  let path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
      <html>
        <head>
          <title>My Website</title>
        </head>      
        <body>
        <h1>Welcome to My Website</h1>
        </body>`);

      break;
    case "/home":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
        <html>
          <head>
            <title>My Website</title>
          </head>
          <body><h1>Welcome to home</h1></body>`);
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
        <html>
          <head>
            <title>My Website</title>
          </head>      
          <body>
          <h1>Welcome to My About us page</h1>
          </body>`);
      break;
    case "/node":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
        <html>
          <head>
            <title>My Website</title>
          </head>      
          <body>
          <h1>Welcome to My Node.js project</h1>
          </body>`);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(`<!DOCTYPE html>
        <html>
          <head>
            <title>My Website</title>
          </head>      
          <body>
          <h1>Not Found</h1>
          </body>`);
      break;
  }
});

const port = 3000; // Change the port number to 3000 or any other available port
server.listen(port, () => {
  console.log(`Server listening on port ${port} to terminate use ctrl+c`);
});

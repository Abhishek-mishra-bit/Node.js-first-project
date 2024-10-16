const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  let path = req.url;
  const method = req.method;
  if (path === "/") {
    fs.readFile("message.txt", { encoding: "utf8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("data from file: " + data);
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My Website</title><head>");
      res.write(`<body>${data}</body>`);
      res.write(
        "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>SEND</button></form></body>"
      );
      res.write(`</html>`);
      return res.end();
    });
  }
  if (path === "/message" && method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log("parseBody", parseBody);

      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        console.log("indise fs.writeFile");

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
});

const port = 3000; // Change the port number to 3000 or any other available port
server.listen(port, () => {
  console.log(`Server listening on port ${port} to terminate use ctrl+c`);
});

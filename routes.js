const fs = require("fs");
const requestHandler = (req, res) => {
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
      console.log(parseBody);

      console.log("parseBody", parseBody);

      const message = parseBody.split("=")[0];
      fs.writeFile("message.txt", message, (err) => {
        console.log("indise fs.writeFile");

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;

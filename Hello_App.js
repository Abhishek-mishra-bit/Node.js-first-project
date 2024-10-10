const http = require("http");

const server = http.createServer((req, res) => {
  res.end("My name is Abhishek");
});

const port = 3000; // Change the port number to 3000 or any other available port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

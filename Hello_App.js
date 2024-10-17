const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

const port = 3000; // Change the port number to 3000 or any other available port
server.listen(port, () => {
  console.log(`Server listening on port ${port} to terminate use ctrl+c`);
});

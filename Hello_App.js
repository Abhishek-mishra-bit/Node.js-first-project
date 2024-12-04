const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin"); // Importing the router file
const shopRoutes = require("./routes/shop"); // Importing the shop file
const loginRoutes = require("./routes/login"); //
const app = express();
const path = require("path");
const rootDir = require("./utils/path");
// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

// Use the admin routes with "/admin" prefix
app.use("/admin", adminRoutes);

// Use the shop routes
app.use(shopRoutes);
app.use(loginRoutes);

// Default route to handle other requests
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "./", "views", "404.html"));
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

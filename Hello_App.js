const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin"); // Importing the router file
const shopRoutes = require("./routes/shop"); // Importing the shop file
const loginRoutes = require("./routes/login"); //
const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

// Use the admin routes with "/admin" prefix
// app.use("/admin", adminRoutes);

// // Use the shop routes
// app.use(shopRoutes);
app.use(loginRoutes);

// Default route to handle other requests
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

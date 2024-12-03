const express = require("express");
const bodyParser = require("body-parser"); // Middleware for parsing body data
const app = express();

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to render the "Add Product" form
app.use("/add-product", (req, res, next) => {
  res.send(`
    <form action="/product" method="post">
      <input type="text" name="title" placeholder="Product Title">
      <input type="number" name="size" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
app.post("/product", (req, res, next) => {
  console.log(req.body); // Logs { title: 'value entered in the input field' }
  res.redirect("/");
});

// Default route
app.use("/", (req, res, next) => {
  res.send("<h1>This is my first web page</h1>");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

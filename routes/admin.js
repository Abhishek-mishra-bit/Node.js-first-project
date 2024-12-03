const express = require("express");
const router = express.Router();

// Route to render the "Add Product" form
router.get("/add-product", (req, res, next) => {
  res.send(`
    <form action="/admin/add-product" method="post">
      <input type="text" name="title" placeholder="Product Title">
      <input type="number" name="size" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Route to handle form submission
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // Logs { title: 'value', size: 'value' }
  res.redirect("/admin/product"); // Redirect to /admin/product
});

// Route to handle /admin/product
router.get("/product", (req, res, next) => {
  res.send("<h1>Product added successfully!</h1>");
});

module.exports = router;

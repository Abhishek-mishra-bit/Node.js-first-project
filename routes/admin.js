const express = require("express");
const path = require("path");
const router = express.Router();

// Route to render the "Add Product" page
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "/views", "/add-product.html"));
});

// Route to handle form submission
router.post("/add-product", (req, res, next) => {
  console.log(req.body); // Logs { title: 'value', size: 'value' }
  res.redirect("/admin/product");
});

// Route to show success page
router.get("/product", (req, res, next) => {
  res.send("<h1>Product added successfully!</h1>");
});

module.exports = router;

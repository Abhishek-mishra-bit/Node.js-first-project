const express = require("express");

const router = express.Router();
// Middleware to parse URL-encoded form data

router.get("/", (req, res, next) => {
  res.send("<h1>This is my first web page</h1>");
});

module.exports = router;

const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");
// const app = express();
// app.use(express.urlencoded({ extended: true }));

router.get("/message", (req, res) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat exist";
    }

    res.sendFile(path.join(__dirname, "..", "views", "message.html"));
  });
});
router.post("/message", (req, res) => {
  if (req.body.username && req.body.message) {
    fs.writeFile(
      "username.txt",
      `${req.body.username}: ${req.body.message} `,

      (err) => (err ? console.log(err) : null)
    );
  }
  res.redirect("/message");
});
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});
router.post("/login", (req, res) => res.redirect("/message"));

module.exports = router;

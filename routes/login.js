const express = require("express");
const fs = require("fs");
const router = express.Router();
// const app = express();
// app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat exist";
    }
    res.send(
      `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value = localStorage.getItem('username')">
                <input type="text" name="message" id="message">
                <input type="hidden" name="username" id="username">
                <br />
                <button type="submit">Send</button>
            </form>`
    );
  });
});
router.post("/", (req, res) => {
  if (req.body.username && req.body.message) {
    fs.writeFile(
      "username.txt",
      `${req.body.username}: ${req.body.message} `,

      (err) => (err ? console.log(err) : null)
    );
  }
  res.redirect("/");
});
router.get("/login", (req, res) => {
  res.send(
    `<form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
        <input type="text" name="username" placeholder="username" id="username">
        <br />
        <button type="submit">Login</button>
    </form>`
  );
});
router.post("/login", (req, res) => res.redirect("/"));

module.exports = router;

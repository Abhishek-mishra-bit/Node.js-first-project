const express = require("express");

const router = express.Router();
const path = require("path");

// app.use(bodyParser.json());

// Serve the contact page (for the form)
router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/views", "contactForm.html"));
});

// Handle form submission
router.post("/submit", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Process the form data (e.g., save to database or send an email)

  // After submission, redirect to the success page
  res.redirect("/success");
});

// Success page
router.get("/success", (req, res) => {
  res.send("<h1>Information Submitted Successfully!</h1>");
});

module.exports = router;

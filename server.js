// Import dependencies
const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

// Instantiate app
const app = express();

// Set contact page
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/index.html"); // Check relative path
})

// Set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}. . .`);
})
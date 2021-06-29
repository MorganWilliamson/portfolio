// Import dependencies
const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const cors = require("cors");
require("dotenv").config();

// Instantiate app
const app = express();

// CORS
app.use(cors({ origin: "*" }));

// Set contact page
app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/portfolio/index.html"); // Check relative path
})

// Set port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}. . .`);
})

// Transporter object
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

// Verify connection
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages!");
    }
})

// POST route
app.post("/send", (req, res) => {
    // Accept and parse form data
    let form = new multiparty.Form();
    let data = {};

    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });

        // Configure mail object
        const mail = {
            sender: `${data.name} <${data.email}`,
            to: process.env.EMAIL,
            text: `${data.name} <${data.email}> \n${data.message}`
        };

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log("Error sending message: ", err);
                res.status(500).send("Something went wrong.");
            } else {
                res.status(200).json({ status: "success" });
            }
        });
    });
});

require('dotenv').config();

const nodemailer    = require('nodemailer');
const express       = require('express');
const app           = express();
const bodyParser    = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

//POST route from the contact form
app.post("/contact", function(req,res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_USERNAME,
            pass:GMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: req.body.name + '&lt;' + req.body.email + '&gt;',
        to: GMAIL_USERNAME,
        subject: 'New message from your personal website',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, function(err, response) {
        if(err) {
            document.getElementById("message").value = "Oops! Something went wrong. Please try again.";
        }
        else {
            document.getElementById("message").value = "Message sent! Thanks for reaching out!";
        }
    });
});

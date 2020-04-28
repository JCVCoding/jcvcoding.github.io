const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../../.env" });

const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on port ${port}`));

let transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_SENDGRID_API_KEY,
  },
  logger: true,
  debug: true,
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.get("/contact", (req, res) => {
  res.send("Backend");
});

app.post("/contact", (req, res) => {
  const { name, email, message, subject } = req.body;

  const fromGmail = (e) => {
    let emailAtStart = e.indexOf("@");
    let emailMinusDomain = e.slice(0, emailAtStart);
    let emailModed = emailMinusDomain + "@gmail.com";
    return emailModed;
  };

  let msg = {
    to: process.env.REACT_APP_USER_EMAIL,
    from: `${name} ${fromGmail(email)}`,
    subject,
    text: `Email from: ${email}
    ${message}`,
  };

  try {
    transporter.sendMail(msg);
    res.send("Success");
    res.sendStatus(200);
  } catch (err) {
    res.status(422).send(err);
  }
});

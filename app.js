const path = require("path");

const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const Stripe = require("stripe")(process.env.STRIPE_SECRET);
const Mailjet = require("node-mailjet");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "client/build")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const mailjetClient = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
  {
    config: {},
    options: {},
  }
);

app.post("/stripe/charge", async (req, res) => {
  let {
    amount,
    id,
    firstName,
    lastName,
    email,
    add,
    nexts,
    address,
    zip,
    city,
    country,
  } = req.body;
  try {
    const payment = await Stripe.paymentIntents.create({
      amount: amount,
      currency: "EUR",
      description: "LVQM",
      payment_method: id,
      confirm: true,
      metadata: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        zip: zip,
        city: city,
        coutry: country,
      },
    });
    res.json({
      message: "Payment successfull",
      success: true,
    });
  } catch (error) {
    console.log("error...", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.post("/emailBook/send", async (req, res) => {
  let { firstName, email, bookLanguage } = req.body;
  let mailjetTemplate;
  let subject;
  if (bookLanguage === "fr") {
    mailjetTemplate = 4012156;
    subject = `Ton Ebook LVQM est arrivé ${firstName} !`;
  } else {
    mailjetTemplate = 4012419;
    subject = `Your LVQM Ebook is here ${firstName} !`;
  }
  try {
    const request = mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "mateo@lvqm.fr",
            Name: "LVQM",
          },
          To: [
            {
              Email: email,
              Name: firstName,
            },
          ],
          Subject: subject,
          TemplateID: mailjetTemplate,
          TemplateLanguage: true,
          Variables: {
            firstname: firstName,
          },
        },
      ],
    });
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
    res.json({
      message: "Email successfully sent",
      success: true,
    });
  } catch (error) {
    console.log("error...", error);
    res.json({
      message: "Email not sent",
      success: false,
    });
  }
});

app.post("/emailCoaching/send", async (req, res) => {
  let { language, firstName, email } = req.body;
  let mailjetTemplate;
  let subject;

  if (language === "fr") {
    mailjetTemplate = 4016014;
    subject = `Ton Ebook et Coaching LVQM sont arrivés ${firstName} !`;
  } else {
    mailjetTemplate = 4015983;
    subject = `Your LVQM Ebook and Coaching are here ${firstName} !`;
  }

  try {
    const request = mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "mateo@lvqm.fr",
            Name: "LVQM",
          },
          To: [
            {
              Email: email,
              Name: firstName,
            },
          ],
          Subject: subject,
          TemplateID: mailjetTemplate,
          TemplateLanguage: true,
          Variables: {
            firstname: firstName,
          },
        },
      ],
    });
    request
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.log(err.statusCode);
      });
    res.json({
      message: "Email successfully sent",
      success: true,
    });
  } catch (error) {
    console.log("error...", error);
    res.json({
      message: "Email not sent",
      success: false,
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port: "${PORT}"`);
});

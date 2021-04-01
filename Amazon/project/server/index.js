const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const { request, response } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.get("/", (request, response) => response.status(200).send("hello mihir"));

app.post("/payment", cors(), async (request, response) => {
  let { amount, id } = request.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    response.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    response.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on Port");
});

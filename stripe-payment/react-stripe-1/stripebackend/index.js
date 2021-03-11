const cors = require("cors");
const express = require("express");
const { default: Stripe } = require("stripe");
// add a stripe key
const secretKey =
  "sk_test_51IT86CExWNxTV3d944Xm6oI3taNOhdsAjCUs5tnDb1VVplghplY24hZl8rbU5N2Q2gCl6v9iojQkaRGnA8KJouqA00z0vfh2xw";
const stripe = require("stripe")(secretKey);
const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

const app = express();

// middlewere
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("I AM SENDING A REQUEST");
});

app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("PRODUCT>>", product);
  console.log("PRICE>>", product.price);
  const idempontencyKey = uuidv4(); // to not charge to user again

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "USD",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_coutry,
            },
          },
        },
        { idempontencyKey }
      );
    })

    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

// listen

app.listen(8282, () => console.log("LISTENING AT PORT 8282"));

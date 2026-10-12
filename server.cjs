const express = require("express");
const cors = require("cors");

const app = express();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable.");
}

const stripe = require("stripe")(stripeSecretKey);

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Demo implementation. In a production flow, calculate and validate
  // the final amount server-side from trusted product data.
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("CREATE_PAYMENT_INTENT_ERROR", error);
    res.status(500).send({ error: "Unable to create payment intent." });
  }
});

app.listen(4242, () => {
  console.log("Node server listening on port 4242");
});

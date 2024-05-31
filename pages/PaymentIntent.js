const express = require("express");
const stripe = require("stripe")(
  "sk_test_51PHbmfP5jpQKJ3zOY1HzliqP4LCJNEk0QH3HLF8lAf9IWoAsKhesomgIuUJiIBIzNuMtm2NycWY2SuhBeTPPA3LL00h8NxMTPG"
);
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { plan } = req.body;

  // Defina o valor conforme o plano
  const amount = plan === "mensal" ? 1000 : 10000; // Exemplo: 10.00 e 100.00

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    paymentIntent: paymentIntent.client_secret,
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));

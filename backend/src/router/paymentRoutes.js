const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51NucmjGeH2Svd03Bnx2O1ocN9NrT0aiJEajf66qCtE7MEPxmDV1qtBPTSi8xnFXHGw8w5md6CULrV4WvdkuT737a00BOIXXKqi"
);

// router endpoints
router.post("/intents", async (req, res) => {
  try {
    // create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    // return the secret
    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

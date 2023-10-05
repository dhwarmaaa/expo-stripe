const express = require("express");
const productRoutes = require("./router/productRoutes");
const paymentRoutes = require("./router/paymentRoutes");
const orderRoutes = require("./router/orderRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/payments", paymentRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

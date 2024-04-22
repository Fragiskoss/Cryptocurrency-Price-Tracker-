const express = require("express");
const router = express.Router();
const Cryptocurrency = require("../models/Cryptocurrency");

router.get("/cryptocurrencies", async (req, res) => {
  try {
    const cryptocurrencies = await Cryptocurrency.find();
    res.json(cryptocurrencies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;

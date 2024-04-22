const mongoose = require("mongoose");

const CryptocurrencySchema = new mongoose.Schema({
  name: String,
  symbol: String,
  price: Number,
  marketCap: Number,
  volume: Number,
});

const Cryptocurrency = mongoose.model("Cryptocurrency", CryptocurrencySchema);

module.exports = Cryptocurrency;

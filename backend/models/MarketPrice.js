const mongoose = require('mongoose');

// Define the Market Price Schema
const marketPriceSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
  },
  pricePerKg: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('MarketPrice', marketPriceSchema);

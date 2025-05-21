const mongoose = require('mongoose');

// Define the PredictedYield Schema
const predictedYieldSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
  },
  fieldLocation: {
    type: String,
    required: true,
  },
  predictedYield: {
    type: Number,
    required: true,
  },
  predictedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PredictedYield', predictedYieldSchema);

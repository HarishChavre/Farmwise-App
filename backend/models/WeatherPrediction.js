const mongoose = require('mongoose');

// Define the Weather Prediction Schema
const weatherPredictionSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  forecastDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('WeatherPrediction', weatherPredictionSchema);

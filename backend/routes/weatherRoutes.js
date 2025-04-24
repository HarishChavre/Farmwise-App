const express = require('express');
const { createWeatherPrediction } = require('../controllers/weatherController');
const router = express.Router();

// POST /weather-prediction
router.post('/weather-prediction', createWeatherPrediction);

module.exports = router;

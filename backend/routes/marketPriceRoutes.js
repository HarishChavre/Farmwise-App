const express = require('express');
const { createMarketPrice } = require('../controllers/marketPriceController');
const router = express.Router();

// POST /market-price
router.post('/market-price', createMarketPrice);

module.exports = router;

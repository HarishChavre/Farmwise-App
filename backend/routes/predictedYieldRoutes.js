const express = require('express');
const { createPredictedYield } = require('../controllers/predictedYieldController');
const router = express.Router();

// POST /predicted-yield
router.post('/predicted-yield', createPredictedYield);

module.exports = router;

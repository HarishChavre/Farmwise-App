const express = require('express');
const { createDiseaseDetection } = require('../controllers/diseaseController');
const router = express.Router();

// POST /disease-detection
router.post('/disease-detection', createDiseaseDetection);

module.exports = router;

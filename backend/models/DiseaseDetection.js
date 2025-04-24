const mongoose = require('mongoose');

// Define the Disease Detection Schema
const diseaseDetectionSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true,
  },
  diseaseName: {
    type: String,
    required: true,
  },
  detectionDate: {
    type: Date,
    default: Date.now,
  },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
});

module.exports = mongoose.model('DiseaseDetection', diseaseDetectionSchema);

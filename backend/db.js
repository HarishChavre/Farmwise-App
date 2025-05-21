const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URI || 'mongodb://localhost:27017/farmwiseDB'; // MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

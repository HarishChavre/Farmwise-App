const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const predictedYieldRoutes = require('./routes/predictedYieldRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const marketPriceRoutes = require('./routes/marketPriceRoutes');

// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use('/api', authRoutes);
app.use('/api', predictedYieldRoutes);
app.use('/api', diseaseRoutes);
app.use('/api', weatherRoutes);
app.use('/api', marketPriceRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

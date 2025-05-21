import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>Empowering Farmers with Real-Time Data and Predictions</h1>
          <p>Weather forecasts, disease detection, yield predictions, and more.</p>
          <button className="cta-btn">Get Started</button>
        </motion.div>
        <motion.img
          className="hero-image"
          src="/farm.jpg"
          alt="Farm"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Features Overview */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-items">
          <motion.div
            className="feature"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/pmkisan.jpg" alt="Weather Forecast" />
            <h3>Weather Forecast</h3>
            <p>Real-time weather data tailored for farmers' needs.</p>
          </motion.div>
          <motion.div
            className="feature"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/leaf.jpg" alt="Disease Detection" />
            <h3>Disease Detection</h3>
            <p>ML-powered disease prediction to protect your crops.</p>
          </motion.div>
          <motion.div
            className="feature"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/tractor.jpg" alt="Yield Prediction" />
            <h3>Yield Prediction</h3>
            <p>Predict your farm's yield with weather and data insights.</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <motion.div
            className="step"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Step 1: Sign Up</h3>
            <p>Register your farm and data to get started.</p>
          </motion.div>
          <motion.div
            className="step"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3>Step 2: Access Features</h3>
            <p>Get tailored weather forecasts, disease predictions, and more.</p>
          </motion.div>
          <motion.div
            className="step"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Step 3: Make Informed Decisions</h3>
            <p>Use real-time insights to improve your farming decisions.</p>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <p>
          Farmwise is dedicated to helping farmers make smarter decisions using real-time
          data and predictive analytics. We strive to empower farmers with tools that enhance
          their productivity and sustainability.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Farmwise. All Rights Reserved.</p>
      </footer>

      <style>{`
        .App {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }

        .hero {
          background-color: #4CAF50;
          color: white;
          display: flex;
          justify-content: space-between;
          padding: 50px;
        }

        .hero-content {
          max-width: 50%;
        }

        .hero h1 {
          font-size: 36px;
        }

        .hero p {
          font-size: 18px;
          margin: 20px 0;
        }

        .cta-btn {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #ff8c00;
          color: white;
          border: none;
          cursor: pointer;
        }

        .cta-btn:hover {
          background-color: #e67e00;
        }

        .hero-image {
          width: 50%;
          object-fit: cover;
          border-radius: 10px;
        }

        .features {
          background-color: #fff;
          padding: 50px 0;
          text-align: center;
        }

        .features h2 {
          font-size: 32px;
          margin-bottom: 30px;
        }

        .feature-items {
          display: flex;
          justify-content: space-around;
        }

        .feature {
          width: 30%;
          padding: 20px;
        }

        .feature img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .feature h3 {
          font-size: 24px;
          margin: 10px 0;
        }

        .how-it-works {
          background-color: #e8f5e9;
          padding: 50px 0;
          text-align: center;
        }

        .steps {
          display: flex;
          justify-content: space-around;
        }

        .step {
          width: 30%;
          padding: 20px;
        }

        .about-us {
          background-color: #ffffff;
          padding: 50px;
          text-align: center;
        }

        .about-us h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 20px;
        }

        .footer p {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default App;

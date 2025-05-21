import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// WeatherPrediction.js
export default function WeatherPrediction() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Function to fetch user's location and weather data
  useEffect(() => {
    // Get location using the browser's geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          // You can replace this with a real weather API later
          setLocation(`${latitude}, ${longitude}`);

          // Dummy weather data (replace with API later)
          setWeatherData({
            today: "Sunny, 29°C",
            tomorrow: "Rain, 24°C",
            dayAfter: "Cloudy, 26°C",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setLoading(false);
        }
      );
    }
  }, []);

  return (
    <div className="weather-container">
      <motion.h1
        className="main-header"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        🌾 Farwise Agriculture Forecast Dashboard
      </motion.h1>

      {loading ? (
        <p className="loading-text">Fetching weather data...</p>
      ) : (
        <div className="grid-container">
          {/* Weather Forecast */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <div className="card">
              <h2 className="section-title">Weather Forecast</h2>
              <p className="location-text">Location: {location}</p>
              <ul className="weather-list">
                <li>🌤️ Today: {weatherData.today}</li>
                <li>🌦️ Tomorrow: {weatherData.tomorrow}</li>
                <li>⛅ Day After: {weatherData.dayAfter}</li>
              </ul>
            </div>
          </motion.div>

          {/* Soil Conditions */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            <div className="card">
              <h2 className="section-title">Soil Conditions</h2>
              <ul className="condition-list">
                <li>💧 Moisture: 35%</li>
                <li>⚖️ pH Level: 6.8</li>
                <li>🌱 Nutrients: Optimal</li>
              </ul>
            </div>
          </motion.div>

          {/* Crop Recommendations */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <div className="card">
              <h2 className="section-title">Crop Recommendations</h2>
              <ul className="crop-list">
                <li>🌾 Wheat</li>
                <li>🌿 Mustard</li>
                <li>🌾 Barley</li>
              </ul>
            </div>
          </motion.div>

          {/* Alerts & News */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
            <div className="card full-span">
              <h2 className="section-title">Alerts & News</h2>
              <ul className="alert-list">
                <li>⚠️ Rain expected tomorrow in Northern regions.</li>
                <li>🌾 New fertilizer subsidy announced by the government.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// Internal CSS
const style = document.createElement('style');
style.innerHTML = `
  /* Main container and background */
  .weather-container {
    min-height: 100vh;
    background: linear-gradient(to bottom right, #A1C4E8, #D4E9D4);
    padding: 30px;
    font-family: 'Poppins', sans-serif;
  }

  /* Main header styling */
  .main-header {
    font-size: 3rem;
    font-weight: 800;
    color: #2F6A56;
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 2px;
  }

  /* Loading text */
  .loading-text {
    text-align: center;
    font-size: 1.25rem;
    color: #555;
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }

  /* Grid container for cards */
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  /* Card styling */
  .card {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .full-span {
    grid-column: span 2;
  }

  /* Section Titles */
  .section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2F6A56;
    margin-bottom: 10px;
  }

  /* Location text and weather list */
  .location-text {
    font-size: 1rem;
    color: #777;
  }

  .weather-list, .condition-list, .crop-list, .alert-list {
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }

  .weather-list li, .condition-list li, .crop-list li, .alert-list li {
    margin-bottom: 8px;
  }

  .weather-list li::before {
    content: "🌤️ ";
  }

  .condition-list li::before {
    content: "💧 ";
  }

  .crop-list li::before {
    content: "🌾 ";
  }

  .alert-list li::before {
    content: "⚠️ ";
  }

  /* Additional media query for responsiveness */
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;

document.head.appendChild(style);


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PredictedYield from './pages/PredictedYield';
import WeatherPrediction from './pages/WeatherPrediction';
import MarketPrices from './pages/MarketPrices';
import DiseaseDetection from './pages/DiseaseDetection';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  return (
    <Router>
    
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        {/* Redirect to login if not authenticated */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        <Route path="/login" element={<LoginSignup setIsAuthenticated={setIsAuthenticated} />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/predicted-yield" element={<PredictedYield />} />
            <Route path="/weather" element={<WeatherPrediction />} />
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="login-signup" element={<LoginSignup setIsAuthenticated={setIsAuthenticated} />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

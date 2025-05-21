import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.logo}>🌾 FarmWise</Link>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/predicted-yield" style={styles.navLink}>
            Predicted Yield
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/weather" style={styles.navLink}>
            Weather Prediction
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/market-prices" style={styles.navLink}>
            Market Prices
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/disease-detection" style={styles.navLink}>
            Disease Detection
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login-signup" style={styles.navButton}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Internal CSS styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#2C3E50",
    padding: "15px 40px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "sticky",
    top: "0",
    zIndex: "1000",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ECF0F1",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: "0",
    padding: "0",
  },
  navItem: {
    margin: "0 15px",
  },
  navLink: {
    textDecoration: "none",
    color: "#ECF0F1",
    fontSize: "16px",
    fontWeight: "500",
    transition: "0.3s",
  },
  navButton: {
    textDecoration: "none",
    background: "#1ABC9C",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "0.3s",
  },
};

// Hover Effects
styles.navLink[":hover"] = {
  color: "#1ABC9C",
};
styles.navButton[":hover"] = {
  background: "#16A085",
};

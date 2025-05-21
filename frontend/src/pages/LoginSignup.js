import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSignup({ setIsAuthenticated }) {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    navigate("/home"); // Redirect to home page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <ul style={styles.tabGroup}>
          <li
            style={activeTab === "signup" ? styles.activeTab : styles.tab}
            onClick={() => handleTabClick("signup")}
          >
            Sign Up
          </li>
          <li
            style={activeTab === "login" ? styles.activeTab : styles.tab}
            onClick={() => handleTabClick("login")}
          >
            Log In
          </li>
        </ul>

        <div style={styles.tabContent}>
          {activeTab === "signup" ? (
            <form onSubmit={handleSubmit}>
              <div style={styles.row}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={styles.input} />
                </div>
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />
              </div>
              <button type="submit" style={styles.button}>Sign Up</button>
            </form>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />
              </div>
              <p style={styles.forgot}>
                <a href="#" style={styles.link}>Forgot Password?</a>
              </p>
              <button type="submit" style={styles.button}>Log In</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Internal CSS styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundImage: "url('/farm.jpg')", // Background Image from Public Folder
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)", // Transparent glass effect
    backdropFilter: "blur(12px)",
    borderRadius: "15px",
    padding: "50px",
    width: "480px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
  },
  tabGroup: {
    display: "flex",
    padding: "0",
    margin: "0 0 20px 0",
    listStyle: "none",
    borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
  },
  tab: {
    flex: 1,
    padding: "15px",
    color: "#ecf0f1",
    fontSize: "18px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
  },
  activeTab: {
    flex: 1,
    padding: "15px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    fontSize: "18px",
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "bold",
  },
  tabContent: {
    textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    marginBottom: "15px",
    width: "100%",
  },
  label: {
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "12px",
    background: "rgba(255, 255, 255, 0.2)",
    border: "none",
    color: "#ffffff",
    fontSize: "16px",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    background: "#1abc9c",
    color: "white",
    padding: "14px",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%",
    borderRadius: "8px",
  },
  forgot: {
    marginTop: "10px",
    textAlign: "right",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "14px",
  },
};

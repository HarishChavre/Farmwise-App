import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <motion.div
                style={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* About */}
                <motion.div style={styles.section} variants={itemVariants}>
                    <h3 style={styles.heading}>🌾 FarmWise</h3>
                    <p>Smart solutions for modern agriculture.</p>
                    <p>📞 +123 456 7890</p>
                    <p>🕒 Mon - Sat: 8:00 - 18:00</p>
                </motion.div>

                {/* Popular Features */}
                <motion.div style={styles.section} variants={itemVariants}>
                    <h4 style={styles.heading}>Popular Features</h4>
                    <ul style={styles.list}>
                        <li>Smart Crop Planning</li>
                        <li>Soil Health Tracking</li>
                        <li>Market Price Insights</li>
                        <li>Weather Prediction</li>
                    </ul>
                </motion.div>

                {/* Support */}
                <motion.div style={styles.section} variants={itemVariants}>
                    <h4 style={styles.heading}>Support</h4>
                    <ul style={styles.list}>
                        <li><Link to="/docs" style={styles.link}>Documentation</Link></li>
                        <li><Link to="/forums" style={styles.link}>Forums</Link></li>
                        <li><Link to="/courses" style={styles.link}>Available Courses</Link></li>
                        <li><Link to="/instructor" style={styles.link}>Become an Instructor</Link></li>
                    </ul>
                </motion.div>

                {/* Global Reach */}
                <motion.div style={styles.section} variants={itemVariants}>
                    <h4 style={styles.heading}>Global Reach</h4>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1024px-World_map_-_low_resolution.svg.png"
                        alt="World Map"
                        style={{ width: "100%", maxWidth: "200px", marginTop: "10px", borderRadius: "8px" }}
                    />
                </motion.div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
                style={styles.bottomBar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <p>© {new Date().getFullYear()} FarmWise. All rights reserved.</p>
            </motion.div>
        </footer>
    );
}

const styles = {
    footer: {
        background: "#1E1E2F",
        color: "#F5F5F5",
        padding: "40px 0 20px",
        fontFamily: "'Segoe UI', sans-serif",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
    },
    section: {
        flex: "1 1 220px",
        margin: "20px",
    },
    heading: {
        color: "#00D1B2",
        marginBottom: "15px",
        fontSize: "18px",
    },
    list: {
        listStyle: "none",
        padding: 0,
        lineHeight: "1.8",
    },
    link: {
        color: "#F5F5F5",
        textDecoration: "none",
        transition: "color 0.3s",
    },
    bottomBar: {
        textAlign: "center",
        paddingTop: "20px",
        borderTop: "1px solid #333",
        marginTop: "30px",
        fontSize: "14px",
    },
};

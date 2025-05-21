import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const commodityOverview = [
  { commodity: "LADIES FINGER", arrival: 750, price: 2380 },
  { commodity: "FLOWER", arrival: 1487, price: 1486 },
  { commodity: "CUCUMBER", arrival: 1304, price: 1641 },
  { commodity: "ONION", arrival: 77047, price: 1048 },
  { commodity: "CABBAGE", arrival: 1094, price: 702 },
];

const detailedTable = [
  { date: "21/04/2025", apmc: "AMRAVATI", variety: "----", unit: "QUINTAL", quantity: 3, lrate: 2800, hrate: 3100, modal: 2950 },
  { date: "21/04/2025", apmc: "NANDGAON", variety: "8203", unit: "QUINTAL", quantity: 14, lrate: 2050, hrate: 2624, modal: 2350 },
  { date: "21/04/2025", apmc: "GANGAPUR", variety: "HIRVI", unit: "QUINTAL", quantity: 11, lrate: 2080, hrate: 2612, modal: 2500 },
  { date: "21/04/2025", apmc: "MUMBAI", variety: "LOCAL", unit: "QUINTAL", quantity: 120, lrate: 2800, hrate: 4500, modal: 3900 },
];

export default function MarketPriceDashboard() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(commodityOverview);

  useEffect(() => {
    setFilteredData(
      commodityOverview.filter((item) =>
        item.commodity.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h1 style={styles.header}>Market Price Dashboard</h1>
        <input
          type="text"
          placeholder="Search by commodity..."
          style={styles.input}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Section 1: Overview */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Commodity Price Overview</h2>
        <div style={styles.scrollContainer}>
          <motion.div
            style={styles.motionList}
            animate={{ y: ["0%", `-${100 * filteredData.length}%`] }}
            transition={{ duration: filteredData.length * 2, repeat: Infinity, ease: "linear" }}
          >
            {filteredData.map((item, idx) => (
              <div key={idx} style={styles.itemRow}>
                <div>{item.commodity}</div>
                <div>{item.arrival} Qtls</div>
                <div>₹{item.price} / Qtl</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section 2: Detailed Table */}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Detailed Arrival & Prices</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>APMC</th>
                <th>Variety</th>
                <th>Unit</th>
                <th>Quantity</th>
                <th>Lrate</th>
                <th>Hrate</th>
                <th>Modal</th>
              </tr>
            </thead>
            <tbody>
              {detailedTable.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.date}</td>
                  <td>{item.apmc}</td>
                  <td>{item.variety}</td>
                  <td>{item.unit}</td>
                  <td>{item.quantity}</td>
                  <td>{item.lrate}</td>
                  <td>{item.hrate}</td>
                  <td>{item.modal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <button style={styles.refreshButton} onClick={() => window.location.reload()}>
          🔄 Refresh Data
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0d9488",
    color: "white",
    padding: "24px",
    fontFamily: "sans-serif",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    width: "300px",
  },
  section: {
    marginBottom: "32px",
  },
  subHeader: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  scrollContainer: {
    overflow: "hidden",
    height: "240px",
    position: "relative",
    backgroundColor: "#0f766e",
    borderRadius: "12px",
  },
  motionList: {
    position: "absolute",
    width: "100%",
  },
  itemRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "16px",
    padding: "8px 16px",
    borderBottom: "1px solid white",
  },
  tableWrapper: {
    overflowX: "auto",
    backgroundColor: "#0f766e",
    borderRadius: "12px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: "white",
  },
  footer: {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  refreshButton: {
    backgroundColor: "#ffffff20",
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

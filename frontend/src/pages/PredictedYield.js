import React, { useState } from 'react';
import { motion } from 'framer-motion';

const styles = {
  container: {
    backgroundColor: '#FAFAF9',
    fontFamily: 'sans-serif',
    padding: '2rem',
    maxWidth: '600px',
    margin: '2rem auto',
    borderRadius: '1rem',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  },
  title: {
    fontSize: '1.8rem',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: '1.5rem'
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    marginBottom: '0.25rem',
    color: '#1F2937'
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #E5E7EB',
    marginBottom: '1rem',
    fontSize: '1rem'
  },
  button: {
    backgroundColor: '#234F1E',
    color: 'white',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    marginTop: '0.5rem',
    cursor: 'pointer'
  },
  result: {
    marginTop: '1.5rem',
    backgroundColor: '#F9FAFB',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #E5E7EB'
  }
};

const YieldEstimator = () => {
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    setShowResult(true);
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1 style={styles.title}>Predicted Yield Estimator</h1>

      <label style={styles.label}>Crop Type</label>
      <select style={styles.input}>
        <option>Wheat</option>
        <option>Rice</option>
        <option>Maize</option>
        <option>Soybean</option>
      </select>

      <label style={styles.label}>Soil Type</label>
      <select style={styles.input}>
        <option>Loamy</option>
        <option>Sandy</option>
        <option>Clay</option>
        <option>Silty</option>
      </select>

      <label style={styles.label}>Area of Land (hectares)</label>
      <input type="number" placeholder="e.g. 5" style={styles.input} />

      <label style={styles.label}>Location / Region</label>
      <input type="text" placeholder="e.g. Punjab, India" style={styles.input} />

      <label style={styles.label}>Sowing Date</label>
      <input type="date" style={styles.input} />

      <label style={styles.label}>Rainfall (mm)</label>
      <input type="number" placeholder="e.g. 300" style={styles.input} />

      <label style={styles.label}>Fertilizer Usage (kg/ha)</label>
      <input type="number" placeholder="e.g. 50" style={styles.input} />

      <label style={styles.label}>Previous Yield (Optional)</label>
      <input type="number" placeholder="e.g. 3.0" style={styles.input} />

      <motion.button
        style={styles.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSubmit}
      >
        Submit
      </motion.button>

      {showResult && (
        <motion.div
          style={styles.result}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <strong>Predicted Yield:</strong> 3.2 tons/hectare<br />
          <strong>Confidence:</strong> ±10%<br />
          <strong>Suggestion:</strong> Add 10 kg/ha more fertilizer
        </motion.div>
      )}
    </motion.div>
  );
};

export default YieldEstimator;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleDetect = () => {
    if (!image) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult({
        disease: "Leaf Blight",
        confidence: "92%",
        suggestion: "Apply fungicide and monitor humidity."
      });
    }, 2000);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <img src="https://img.icons8.com/color/96/plant-under-microscope.png" alt="Logo" style={styles.logo} />
        <h1>FarmWise Disease Detection</h1>
        <p>AI-powered plant health analysis</p>
      </header>

      <section style={styles.section}>
        <motion.div
          style={styles.uploadBox}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Upload an Image</h2>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && (
            <motion.img
              src={preview}
              alt="Preview"
              style={styles.preview}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          )}
          <button
            style={styles.button}
            onClick={handleDetect}
            disabled={!image || loading}
          >
            {loading ? 'Detecting...' : 'Detect Disease'}
          </button>
        </motion.div>
      </section>

      {result && (
        <motion.section
          style={styles.resultSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Detection Result</h2>
          <img
            src="https://img.icons8.com/color/96/microscope.png"
            alt="Detection Icon"
            style={{ width: 60, marginBottom: 15 }}
          />
          <p><strong>Disease:</strong> {result.disease}</p>
          <p><strong>Confidence:</strong> {result.confidence}</p>
          <p><strong>Suggestion:</strong> {result.suggestion}</p>
        </motion.section>
      )}

      <footer style={styles.footer}>
        <img
          src="https://img.icons8.com/fluency/48/sunflower.png"
          alt="footer plant"
          style={{ marginRight: 8 }}
        />
        © 2024 FarmWise. Empowering smart agriculture.
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#e8f5e9',
    minHeight: '100vh',
    padding: '0 20px',
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#2e7d32',
    color: 'white',
    padding: '40px 20px 20px',
    borderRadius: '0 0 20px 20px',
  },
  logo: {
    width: 60,
    marginBottom: 10
  },
  section: {
    marginTop: 30
  },
  uploadBox: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    display: 'inline-block',
    width: '90%',
    maxWidth: '400px'
  },
  preview: {
    marginTop: 15,
    width: '100%',
    borderRadius: '10px',
    border: '1px solid #ccc',
    objectFit: 'cover',
  },
  button: {
    marginTop: '15px',
    padding: '10px 25px',
    backgroundColor: '#43a047',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  resultSection: {
    marginTop: 40,
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    display: 'inline-block',
    width: '90%',
    maxWidth: '400px'
  },
  footer: {
    marginTop: 60,
    fontSize: '15px',
    color: '#2e7d32',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0'
  }
};

export default DiseaseDetection;

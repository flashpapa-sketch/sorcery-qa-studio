import React, { useState } from 'react';
import axios from 'axios';

export default function UploadComponent({ onAnalysisComplete }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post(
        \/api/analysis/analyze,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': Bearer \
          }
        }
      );

      onAnalysisComplete(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Upload error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-area">
        <h2>📤 Upload Game File</h2>
        <input
          type="file"
          accept=".html,.htm"
          onChange={handleFileUpload}
          disabled={loading}
          style={{ padding: '10px' }}
        />
        {loading && <p>Analyzing...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
    </div>
  );
}

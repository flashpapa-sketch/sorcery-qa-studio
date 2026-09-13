import React, { useState, useEffect } from 'react';
import './styles/sorcerous.css';
import UploadComponent from './components/UploadComponent';
import ResultsDisplay from './components/ResultsDisplay';
import DashBoard from './components/DashBoard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem('auth_token');
    if (token) {
      setUser({ authenticated: true });
    }
  }, []);

  const handleAnalysisComplete = (results) => {
    setAnalysisResults(results);
    setCurrentPage('results');
  };

  return (
    <div className="app-container">
      <header className="sorcerous-header">
        <h1>🔮 Sorcery QA Studio</h1>
        <nav>
          <button onClick={() => setCurrentPage('dashboard')} className={currentPage === 'dashboard' ? 'active' : ''}>
            Dashboard
          </button>
          <button onClick={() => setCurrentPage('upload')} className={currentPage === 'upload' ? 'active' : ''}>
            Upload
          </button>
        </nav>
      </header>

      <main className="sorcerous-main">
        {currentPage === 'dashboard' && <DashBoard />}
        {currentPage === 'upload' && <UploadComponent onAnalysisComplete={handleAnalysisComplete} />}
        {currentPage === 'results' && analysisResults && <ResultsDisplay results={analysisResults} />}
      </main>
    </div>
  );
}

import React, { useState } from 'react';

export default function ResultsDisplay({ results }) {
  const [filter, setFilter] = useState('all');

  const filteredIssues = filter === 'all'
    ? results.issues
    : results.issues.filter(i => i.severity === filter);

  return (
    <div className="results-container">
      <h2>?? Analysis Results</h2>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All Issues ({results.issues.length})</button>
        <button onClick={() => setFilter('critical')}>Critical ({results.critical_count})</button>
        <button onClick={() => setFilter('major')}>Major ({results.major_count})</button>
        <button onClick={() => setFilter('minor')}>Minor ({results.minor_count})</button>
      </div>

      <div className="issues-list">
        {filteredIssues.map((issue, idx) => (
          <div key={idx} className={`issue-card severity-${issue.severity}`}>
            <h3>{issue.type}</h3>
            <p><strong>Severity:</strong> {issue.severity}</p>
            <p><strong>Message:</strong> {issue.message}</p>
            <p><strong>Details:</strong> {issue.details}</p>
            <p><strong>Suggestion:</strong> {issue.suggestion}</p>
          </div>
        ))}
      </div>

      <div className="score">
        <h3>Overall Score: {results.score}/100</h3>
      </div>
    </div>
  );
}

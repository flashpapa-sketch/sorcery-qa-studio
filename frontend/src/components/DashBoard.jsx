import React from 'react';

export default function DashBoard() {
  return (
    <div className="dashboard-container">
      <h1>🔮 Sorcery QA Studio</h1>
      <p>ゲーム開発者向け自動 QA ツール</p>

      <section className="features">
        <div className="feature-card">
          <h3>🔗 Link Integrity</h3>
          <p>Check for broken links and missing paragraphs</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Dead Ends</h3>
          <p>Detect unreachable content and dead ends</p>
        </div>
        <div className="feature-card">
          <h3>🧩 Variables</h3>
          <p>Verify variable consistency and logic</p>
        </div>
      </section>

      <section className="pricing">
        <h2>💰 Pricing</h2>
        <div className="pricing-cards">
          <div className="price-card">
            <h3>Free</h3>
            <p>\/month</p>
            <ul>
              <li>1 analysis/month</li>
              <li>Basic reports</li>
            </ul>
          </div>
          <div className="price-card highlight">
            <h3>Paid</h3>
            <p>\/month</p>
            <ul>
              <li>Unlimited analyses</li>
              <li>PDF export</li>
              <li>API access</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

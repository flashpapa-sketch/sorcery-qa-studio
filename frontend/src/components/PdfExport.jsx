import React from 'react';
import { jsPDF } from 'jspdf';

export default function PdfExport({ results }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Sorcery QA Studio Report', 10, 10);
    doc.text(Total Issues: \, 10, 20);
    doc.text(Score: \/100, 10, 30);
    doc.save('qa-report.pdf');
  };

  return (
    <button onClick={generatePDF} className="export-button">
      📥 Export as PDF
    </button>
  );
}

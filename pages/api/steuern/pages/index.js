import { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  async function handleUpload() {
    if (!selectedFile) return;
    setUploadStatus('Analysiere Lohnausweis...');
    const res = await fetch('/api/steuern/analyse');
    const result = await res.json();
    setAnalysisResult(result);
    setUploadStatus('Analyse abgeschlossen.');
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>🧾 Steuer-KI Schweiz</h1>

      <h2>📄 PDF-Upload (Lohnausweis)</h2>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleUpload}>Analyse starten</button>
      <p>{uploadStatus}</p>

      {analysisResult && (
        <div>
          <h3>Erkannte Daten:</h3>
          <pre>{JSON.stringify(analysisResult.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

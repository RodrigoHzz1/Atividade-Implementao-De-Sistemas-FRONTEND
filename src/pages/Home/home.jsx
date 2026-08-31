import React from 'react';

export default function Home() {
  return (
    <div style={{
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      color: '#1e293b'
    }}>
      <header style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '16px', marginBottom: '24px' }}>
        <h1 style={{ margin: 0, color: '#2563eb' }}>Sistema de Chamados - Home 🛠️</h1>
        <p style={{ margin: '8px 0 0 0', color: '#64748b' }}>Painel principal carregado com sucesso.</p>
      </header>

      <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Status</h3>
          <p style={{ margin: 0, color: '#16a34a', fontWeight: 'bold' }}>Em Execução</p>
        </div>
        <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Rota</h3>
          <p style={{ margin: 0, color: '#475569' }}>/Home</p>
        </div>
      </main>
    </div>
  );
}
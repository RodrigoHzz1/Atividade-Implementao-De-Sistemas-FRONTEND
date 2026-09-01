import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function HomeCliente() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userPerfil');
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="brand-logo">
          <span className="logo-icon">TN</span>
          <h2>TechNexus</h2>
        </div>
        <div className="user-avatar" title="Perfil do Cliente" onClick={handleLogout}>
          TN
        </div>
      </header>

      <main className="home-content">
        <div className="welcome-card">
          <div>
            <h1>Bem-vindo ao <span className="purple-text">TechNexus</span></h1>
            <p>Central de suporte e acompanhamento de chamados.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/novo-chamado')}>
            + Abrir Chamado
          </button>
        </div>

        <h3 className="section-title">Acesso Rápido</h3>

        {/* Exibe APENAS os módulos do Cliente */}
        <div className="modules-grid">
          <div className="module-card" onClick={() => navigate('/chamados')}>
            <span className="module-icon">🎫</span>
            <div>
              <h4>Chamados</h4>
              <p>Acompanhe o andamento dos seus tickets de suporte.</p>
            </div>
          </div>

          <div className="module-card" onClick={() => navigate('/novo-chamado')}>
            <span className="module-icon">➕</span>
            <div>
              <h4>Novo Chamado</h4>
              <p>Abertura rápida de um novo atendimento ou incidente.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
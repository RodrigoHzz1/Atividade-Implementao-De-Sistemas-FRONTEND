import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export default function HomeFuncionario() {
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
        <div className="user-avatar" title="Sair do Sistema" onClick={handleLogout}>
          TN
        </div>
      </header>

      <main className="home-content">
        <div className="welcome-card">
          <div>
            <h1>Bem-vindo ao <span className="purple-text">TechNexus</span></h1>
            <p>Central de gestão de chamados, equipamentos e infraestrutura de TI.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/novo-chamado')}>
            + Abrir Chamado
          </button>
        </div>

        <h3 className="section-title">Acesso Rápido aos Módulos</h3>

        {/* Exibe TODOS os módulos para a equipe de TI */}
        <div className="modules-grid">
          <div className="module-card active" onClick={() => navigate('/dashboard')}>
            <span className="module-icon">📊</span>
            <div>
              <h4>Dashboard</h4>
              <p>Métricas gerais e indicadores de SLA em tempo real.</p>
            </div>
          </div>

          <div className="module-card" onClick={() => navigate('/chamados')}>
            <span className="module-icon">🎫</span>
            <div>
              <h4>Chamados</h4>
              <p>Lista e acompanhamento de todos os tickets de suporte.</p>
            </div>
          </div>

          <div className="module-card" onClick={() => navigate('/novo-chamado')}>
            <span className="module-icon">➕</span>
            <div>
              <h4>Novo Chamado</h4>
              <p>Abertura rápida de um novo atendimento ou incidente.</p>
            </div>
          </div>

          <div className="module-card" onClick={() => navigate('/equipamentos')}>
            <span className="module-icon">💻</span>
            <div>
              <h4>Equipamentos</h4>
              <p>Inventário completo de ativos e status dos dispositivos.</p>
            </div>
          </div>

          <div className="module-card" onClick={() => navigate('/clientes')}>
            <span className="module-icon">🏢</span>
            <div>
              <h4>Clientes</h4>
              <p>Gestão de empresas atendidas e contratos ativos.</p>
            </div>
          </div>

          <div className="module-card" onClick={() => navigate('/funcionarios')}>
            <span className="module-icon">👥</span>
            <div>
              <h4>Funcionários</h4>
              <p>Controle da equipe interna, analistas e permissões.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
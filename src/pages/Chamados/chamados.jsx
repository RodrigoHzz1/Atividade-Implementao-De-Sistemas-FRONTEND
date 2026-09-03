import React, { useState } from 'react';
import './chamados.css';

export default function Chamados({ usuarioLogado, setTelaAtual, handleLogout }) {
  const [filtroStatus, setFiltroStatus] = useState('todos');

  // Dados mockados
  const [chamados] = useState([
    { id: '#TN-1024', titulo: 'Erro ao acessar o banco de dados', cliente: 'TechCorp', prioridade: 'Alta', status: 'Em Andamento', data: '01/09/2026' },
    { id: '#TN-1023', titulo: 'Lentidão na rede local', cliente: 'LogiTech', prioridade: 'Média', status: 'Pendente', data: '01/09/2026' },
    { id: '#TN-1022', titulo: 'Solicitação de novo monitor', cliente: 'Inova', prioridade: 'Baixa', status: 'Concluído', data: '31/08/2026' },
  ]);

  const chamadosFiltrados = filtroStatus === 'todos' 
    ? chamados 
    : chamados.filter(c => c.status.toLowerCase().replace(' ', '') === filtroStatus);

  const iniciais = usuarioLogado?.nome ? usuarioLogado.nome.substring(0, 2).toUpperCase() : 'US';

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="brand-logo" style={{ cursor: 'pointer' }} onClick={() => setTelaAtual('home')}>
          <svg width="36" height="36" viewBox="0 0 42 42" fill="none">
            <rect width="42" height="42" rx="10" fill="url(#techGradHeader)" />
            <path d="M21 10L31 15V22C31 28.5 26.5 33.5 21 35C15.5 33.5 11 28.5 11 22V15L21 10Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M17 21L20 24L25 18" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="techGradHeader" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7c3aed" />
                <stop offset="1" stopColor="#4c1d95" />
              </linearGradient>
            </defs>
          </svg>
          <h2>Tech<span>Nexus</span></h2>
        </div>

        <div className="user-profile-menu">
          <span className="user-name-label">Olá, <strong>{usuarioLogado?.nome}</strong></span>
          <div className="user-avatar" title="Clique para sair" onClick={handleLogout}>
            {iniciais}
          </div>
        </div>
      </header>

      <main className="home-content">
        <div className="tickets-header-row">
          <div>
            <button className="back-btn-link" onClick={() => setTelaAtual('home')}>← Voltar ao Início</button>
            <h1 className="page-title">Gestão de Chamados</h1>
          </div>
          <button className="btn-primary" onClick={() => alert('Novo chamado')}>+ Novo Chamado</button>
        </div>

        {/* Filtros */}
        <div className="filters-bar">
          <button className={`filter-btn ${filtroStatus === 'todos' ? 'active' : ''}`} onClick={() => setFiltroStatus('todos')}>Todos</button>
          <button className={`filter-btn ${filtroStatus === 'pendente' ? 'active' : ''}`} onClick={() => setFiltroStatus('pendente')}>Pendentes</button>
          <button className={`filter-btn ${filtroStatus === 'emandamento' ? 'active' : ''}`} onClick={() => setFiltroStatus('emandamento')}>Em Andamento</button>
          <button className={`filter-btn ${filtroStatus === 'concluido' ? 'active' : ''}`} onClick={() => setFiltroStatus('concluido')}>Concluídos</button>
        </div>

        {/* Tabela */}
        <div className="table-container">
          <table className="tickets-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Título</th>
                {usuarioLogado?.perfil === 'funcionario' && <th>Cliente</th>}
                <th>Prioridade</th>
                <th>Status</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {chamadosFiltrados.map((item) => (
                <tr key={item.id}>
                  <td className="ticket-id">{item.id}</td>
                  <td className="ticket-title">{item.titulo}</td>
                  {usuarioLogado?.perfil === 'funcionario' && <td>{item.cliente}</td>}
                  <td>
                    <span className={`prio-badge prio-${item.prioridade.toLowerCase()}`}>
                      {item.prioridade}
                    </span>
                  </td>
                  <td>
                    <span className={`status-tag status-${item.status.toLowerCase().replace(' ', '')}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="ticket-date">{item.data}</td>
                  <td>
                    <button className="action-btn">Ver Detalhes</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
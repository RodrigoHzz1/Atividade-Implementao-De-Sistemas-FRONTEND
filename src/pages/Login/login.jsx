import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [perfil, setPerfil] = useState(null);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (perfil === 'cliente') {
      alert(`Login como CLIENTE realizado com sucesso! (${email})`);
    } else {
      alert(`Login como FUNCIONÁRIO (TI) realizado com sucesso! (${email})`);
    }
  };

  return (
    <div className="login-container">
      {/* LADO ESQUERDO - BANNER INFORMATIVO */}
      <div className="login-left-panel">
        <div className="brand-header" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="12" fill="url(#techGrad)" />
            <path d="M21 10L31 15V22C31 28.5 26.5 33.5 21 35C15.5 33.5 11 28.5 11 22V15L21 10Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M17 21L20 24L25 18" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="techGrad" x1="0" y1="0" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7c3aed" />
                <stop offset="1" stopColor="#4c1d95" />
              </linearGradient>
            </defs>
          </svg>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.5px', lineHeight: '1' }}>
              Tech<span style={{ color: '#7c3aed' }}>Nexus</span>
            </span>
            <span style={{ fontSize: '10px', fontWeight: '700', color: '#64748b', letterSpacing: '1.5px', marginTop: '3px' }}>
              HELP DESK & TI
            </span>
          </div>
        </div>

        <div className="left-content">
          <h1 className="main-heading">
            Gestão Integrada <br />
            <span className="purple-text">de Chamados</span>
          </h1>
          <p className="sub-text">
            Conecte atendimentos, equipamentos e sua equipe na plataforma centralizada TechNexus.
          </p>

          {/* NOVOS CARDS DE MÉTRICAS */}
          <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              <div style={{ background: '#ffffff', padding: '14px 10px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <span style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: '#7c3aed' }}>99.8%</span>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>SLA Cumprido</span>
              </div>

              <div style={{ background: '#ffffff', padding: '14px 10px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <span style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>&lt; 15m</span>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Resposta Média</span>
              </div>

              <div style={{ background: '#ffffff', padding: '14px 10px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <span style={{ display: 'block', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>24/7</span>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Suporte Ativo</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569', fontWeight: '600', paddingLeft: '4px' }}>
              <span style={{ height: '8px', width: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }}></span>
              Sistemas operando normalmente
            </div>
          </div>
        </div>
      </div>

      {/* LADO DIREITO - PERFIL OU FORMULÁRIO */}
      <div className="login-right-panel">
        <div className="right-content">
          {!perfil ? (
            <div>
              <h2 className="login-title">Como deseja acessar?</h2>
              <p className="login-subtitle">Selecione seu perfil para continuar no TechNexus</p>

              <div className="profile-button-group">
                <button
                  type="button"
                  className="profile-button"
                  onClick={() => setPerfil('cliente')}
                >
                  <span className="profile-icon">👤</span>
                  <div>
                    <strong className="profile-title">Sou Cliente</strong>
                    <span className="profile-desc">Abrir e acompanhar chamados</span>
                  </div>
                </button>

                <button
                  type="button"
                  className="profile-button"
                  onClick={() => setPerfil('funcionario')}
                >
                  <span className="profile-icon">🛠️</span>
                  <div>
                    <strong className="profile-title">Sou Funcionário / TI</strong>
                    <span className="profile-desc">Gestão e atendimento (N1, N2, N3)</span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="back-header">
                <button
                  type="button"
                  className="back-button"
                  onClick={() => setPerfil(null)}
                >
                  ← Trocar Perfil
                </button>
                <span className="badge-perfil">
                  {perfil === 'cliente' ? 'Cliente' : 'Equipe Técnica / TI'}
                </span>
              </div>

              <h2 className="login-title">Acesse sua conta</h2>
              <p className="login-subtitle">Informe suas credenciais para entrar no TechNexus</p>

              <div className="input-group">
                <label>E-mail corporativo</label>
                <input
                  type="email"
                  required
                  placeholder="seunome@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Senha</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <div className="options-row">
                <label className="remember-me">
                  <input type="checkbox" />
                  Lembrar acesso
                </label>
                <a href="#esqueceu" className="forgot-link">Esqueceu a senha?</a>
              </div>

              <button type="submit" className="submit-button">
                Entrar no Sistema
              </button>
            </form>
          )}

          <div className="footer-text">
            © 2026 TechNexus • Todos os direitos reservados
          </div>
        </div>
      </div>
    </div>
  );
}
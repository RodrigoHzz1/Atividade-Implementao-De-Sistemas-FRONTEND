import React, { useState } from 'react';
import "./pages/Login/login.css";

export default function App() {
  const [perfil, setPerfil] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && senha) {
      setUsuarioLogado({
        email,
        perfil,
        nome: email.split('@')[0],
      });
    }
  };

  const handleLogout = () => {
    setUsuarioLogado(null);
    setPerfil(null);
    setEmail('');
    setSenha('');
  };

  if (usuarioLogado?.perfil === 'cliente') {
    return (
      <div style={styles.dashboardContainer}>
        <header style={styles.header}>
          <h2>TechNexus — Área do Cliente</h2>
          <div>
            <span style={{ marginRight: '15px' }}>Olá, <strong>{usuarioLogado.nome}</strong></span>
            <button onClick={handleLogout} style={styles.logoutBtn}>Sair</button>
          </div>
        </header>
        <main style={styles.mainContent}>
          <div style={styles.card}>
            <h3>Meus Chamados</h3>
            <p>Você não possui nenhum chamado em aberto no momento.</p>
            <button style={styles.primaryBtn}>+ Abrir Novo Chamado</button>
          </div>
        </main>
      </div>
    );
  }

  if (usuarioLogado?.perfil === 'funcionario') {
    return (
      <div style={styles.dashboardContainer}>
        <header style={styles.header}>
          <h2>TechNexus — Painel de Suporte (N1 / N2 / N3)</h2>
          <div>
            <span style={{ marginRight: '15px' }}>Técnico: <strong>{usuarioLogado.nome}</strong></span>
            <button onClick={handleLogout} style={styles.logoutBtn}>Sair</button>
          </div>
        </header>
        <main style={styles.mainContent}>
          <div style={styles.gridDashboard}>
            <div style={styles.cardMetric}>
              <h4>Fila N1 (Triagem)</h4>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>4 pendentes</p>
            </div>
            <div style={styles.cardMetric}>
              <h4>Fila N2 (Suporte Especializado)</h4>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>2 em atendimento</p>
            </div>
            <div style={styles.cardMetric}>
              <h4>Fila N3 (Engenharia)</h4>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>0 pendentes</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="brand-header">
          <div className="logo-icon">T</div>
          <span className="brand-title">TechNexus</span>
        </div>

        <div className="left-content">
          <h1 className="main-heading">
            Gestão Integrada <br />
            <span className="purple-text">de Chamados</span>
          </h1>
          <p className="sub-text">
            Conecte atendimentos, equipamentos e sua equipe na plataforma centralizada TechNexus.
          </p>

          <div className="preview-card">
            <div className="card-header-bar"></div>
            <div className="card-sub-bar"></div>
            <div className="card-grid">
              <div className="card-box"></div>
              <div className="card-box"></div>
              <div className="card-box active"></div>
            </div>
          </div>
        </div>
      </div>

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

const styles = {
  dashboardContainer: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#1e293b',
    borderBottom: '1px solid #334155',
  },
  logoutBtn: {
    backgroundColor: '#ef4444',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  mainContent: {
    padding: '40px',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '24px',
    borderRadius: '8px',
  },
  primaryBtn: {
    backgroundColor: '#7c3aed',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    marginTop: '15px',
    cursor: 'pointer',
  },
  gridDashboard: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  cardMetric: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #7c3aed',
  },
};
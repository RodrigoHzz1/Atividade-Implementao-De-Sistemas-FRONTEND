import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [perfil, setPerfil] = useState(null); // 'cliente' ou 'funcionario'
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

      {/* LADO DIREITO - PERFIL OU FORMULÁRIO */}
      <div className="login-right-panel">
        <div className="right-content">
          {!perfil ? (
            /* PASSO 1: SELEÇÃO DE PERFIL */
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
            /* PASSO 2: FORMULÁRIO DE LOGIN */
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
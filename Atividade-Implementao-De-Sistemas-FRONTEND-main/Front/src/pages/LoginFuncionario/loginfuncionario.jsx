import React from 'react';
import './login.css';

export function Login() {
  return (
    <div className="login-container">
      {/* Lado Esquerdo - Visual Clean */}
      <div className="left-side">
        <div className="left-bg-circle" />

        <div className="brand-header">
          <div className="logo-icon">T</div>
          <h2 className="logo-text">
            Tech<span className="logo-text-dark">Nexus</span>
          </h2>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Gestão Integrada <br />
            <span className="highlight-text">de Chamados</span>
          </h1>
          <p className="hero-subtitle">
            Conecte atendimentos, equipamentos e sua equipe na plataforma centralizada TechNexus.
          </p>
        </div>

        <div className="card-mockup">
          <div>
            <div className="mockup-line-1" />
            <div className="mockup-line-2" />
          </div>
          <div className="mockup-grid">
            <div className="mockup-box" />
            <div className="mockup-box" />
            <div className="mockup-box mockup-box-active" />
          </div>
        </div>
      </div>

      {/* Lado Direito - Formulário */}
      <div className="right-side">
        <div className="form-container">
          <h2 className="form-title">Acesse sua conta</h2>
          <p className="form-subtitle">Informe suas credenciais para entrar no TechNexus</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label className="input-label">E-mail corporativo</label>
              <input 
                type="email" 
                placeholder="seunome@empresa.com" 
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label className="input-label">Senha</label>
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="input-field input-active"
              />
            </div>

            <div className="options-row">
              <label className="remember-label">
                <input type="checkbox" defaultChecked className="checkbox-input" />
                Lembrar acesso
              </label>
              <a href="#" className="forgot-link">Esqueceu a senha?</a>
            </div>

            <button type="submit" className="submit-btn">
              Entrar no Sistema
            </button>
          </form>

          <p className="footer-text">
            © 2026 TechNexus • Todos os direitos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { getUsuarioLogado, logoutSimulado } from "./services/auth";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chamados from "./pages/Chamados";
import Atendimento from "./pages/Atendimento";
import Usuarios from "./pages/Usuarios";

// Rota Protegida
function RotaProtegida({ children }) {
  const usuario = getUsuarioLogado();
  if (!usuario) return <Navigate to="/" replace />;
  return children;
}

// Layout Principal
function Layout({ children }) {
  const usuario = getUsuarioLogado();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutSimulado();
    navigate("/");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <header style={{ backgroundColor: "#1e293b", color: "#fff", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Sistema de Chamados</h2>
        <div>
          <span style={{ marginRight: "15px" }}>Olá, <strong>{usuario?.nome}</strong> ({usuario?.perfil})</span>
          <button onClick={handleLogout} style={{ padding: "6px 12px", backgroundColor: "#ef4444", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Sair</button>
        </div>
      </header>

      <nav style={{ backgroundColor: "#334155", padding: "10px 30px", display: "flex", gap: "20px" }}>
        <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Dashboard</Link>
        <Link to="/chamados" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Chamados</Link>
        
        {(usuario?.perfil === "TECNICO" || usuario?.perfil === "ADMINISTRADOR") && (
          <Link to="/atendimento" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Atendimento</Link>
        )}
        
        {usuario?.perfil === "ADMINISTRADOR" && (
          <Link to="/usuarios" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Usuários</Link>
        )}
      </nav>

      <main style={{ padding: "30px" }}>
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/dashboard" element={<RotaProtegida><Layout><Dashboard /></Layout></RotaProtegida>} />
        <Route path="/chamados" element={<RotaProtegida><Layout><Chamados /></Layout></RotaProtegida>} />
        <Route path="/atendimento" element={<RotaProtegida><Layout><Atendimento /></Layout></RotaProtegida>} />
        <Route path="/usuarios" element={<RotaProtegida><Layout><Usuarios /></Layout></RotaProtegida>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
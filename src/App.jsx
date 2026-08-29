// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getUsuarioLogado } from "./services/authSimulated";

import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Chamados from "./pages/Chamados";
import Atendimento from "./pages/Atendimento";
import Usuarios from "./pages/Usuarios";

// Rota protegida por autenticação
function PrivateRoute({ children, perfisPermitidos }) {
  const usuario = getUsuarioLogado();

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  if (perfisPermitidos && !perfisPermitidos.includes(usuario.perfil)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <MainLayout>{children}</MainLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/" element={<Login />} />

        {/* Rotas Protegidas */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/chamados" 
          element={
            <PrivateRoute>
              <Chamados />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/atendimento" 
          element={
            <PrivateRoute perfisPermitidos={["TECNICO", "ADMINISTRADOR"]}>
              <Atendimento />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/usuarios" 
          element={
            <PrivateRoute perfisPermitidos={["ADMINISTRADOR"]}>
              <Usuarios />
            </PrivateRoute>
          } 
        />

        {/* Redirecionamento padrão */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
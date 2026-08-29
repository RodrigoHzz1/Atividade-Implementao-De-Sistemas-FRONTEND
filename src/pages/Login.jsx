import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSimulado } from "../services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return alert("Preencha o e-mail!");
    loginSimulado(email, senha);
    navigate("/dashboard");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#0f172a" }}>
      <form onSubmit={handleLogin} style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "8px", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#1e293b" }}>Acessar Sistema</h2>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#475569" }}>E-mail</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@teste.com, tecnico@teste.com ou cliente@teste.com"
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #cbd5e1" }}
            required
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px", color: "#475569" }}>Senha</label>
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            placeholder="******"
            style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #cbd5e1" }}
            required
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "4px", fontWeight: "bold", cursor: "pointer" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
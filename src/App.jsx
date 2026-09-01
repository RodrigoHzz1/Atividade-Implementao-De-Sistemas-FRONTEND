import React, { useState, useEffect } from 'react';

// Imports com os nomes exatos das pastas e arquivos (minúsculas)
import CardChamado from './componentes/CardChamado/cardchamado.jsx';
import Footer from './componentes/Footer/footer.jsx';
import Header from './componentes/Header/header.jsx';
import Loading from './componentes/Loading/loading.jsx';
import Modal from './componentes/Modal/modal.jsx';
import Sidebar from './componentes/Sidebar/sidebar.jsx';
import StatusBadge from './componentes/StatusBadge/statusbadge.jsx';

export default function App() {
  const [perfil, setPerfil] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telaAtual, setTelaAtual] = useState('home');
  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [carregando, setCarregando] = useState(false);

  const [chamados] = useState([
    { id: '#TN-1024', titulo: 'Erro ao acessar o banco de dados', cliente: 'TechCorp', prioridade: 'Alta', status: 'Em Andamento', data: '01/09/2026' },
    { id: '#TN-1023', titulo: 'Lentidão na rede local', cliente: 'LogiTech', prioridade: 'Média', status: 'Pendente', data: '01/09/2026' },
    { id: '#TN-1022', titulo: 'Solicitação de novo monitor', cliente: 'Inova', prioridade: 'Baixa', status: 'Concluído', data: '31/08/2026' },
  ]);

  useEffect(() => {
    const perfilSalvo = localStorage.getItem('userPerfil');
    const emailSalvo = localStorage.getItem('userEmail');
    if (perfilSalvo && emailSalvo) {
      setUsuarioLogado({
        email: emailSalvo,
        perfil: perfilSalvo,
        nome: emailSalvo.split('@')[0],
      });
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && senha && perfil) {
      setCarregando(true);
      setTimeout(() => {
        localStorage.setItem('userPerfil', perfil);
        localStorage.setItem('userEmail', email);
        setUsuarioLogado({
          email,
          perfil,
          nome: email.split('@')[0],
        });
        setTelaAtual('home');
        setCarregando(false);
      }, 500);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userPerfil');
    localStorage.removeItem('userEmail');
    setUsuarioLogado(null);
    setPerfil(null);
    setEmail('');
    setSenha('');
    setTelaAtual('home');
  };

  if (carregando) {
    return <Loading />;
  }

  // -------------------------------------------------------------
  // TELA DE CHAMADOS (LOGADO)
  // -------------------------------------------------------------
  if (usuarioLogado && telaAtual === 'chamados') {
    const chamadosFiltrados = filtroStatus === 'todos' 
      ? chamados 
      : chamados.filter(c => c.status.toLowerCase().replace(' ', '') === filtroStatus);

    return (
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans flex flex-col justify-between">
        <Header usuario={usuarioLogado} onLogout={handleLogout} setTela={setTelaAtual} />

        <div className="flex flex-1">
          <Sidebar setTelaAtual={setTelaAtual} telaAtual={telaAtual} />

          <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
            <div className="flex justify-between items-end mb-6">
              <div className="text-left">
                <button className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors mb-2 block" onClick={() => setTelaAtual('home')}>
                  ← Voltar ao Início
                </button>
                <h1 className="text-2xl font-bold text-white">Gestão de Chamados</h1>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors shadow-md shadow-purple-900/40" onClick={() => alert('Abrir modal de novo chamado')}>
                + Novo Chamado
              </button>
            </div>

            {/* Filtros */}
            <div className="flex gap-2 mb-6">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'pendente', label: 'Pendentes' },
                { id: 'emandamento', label: 'Em Andamento' },
                { id: 'concluido', label: 'Concluídos' }
              ].map(f => (
                <button 
                  key={f.id}
                  onClick={() => setFiltroStatus(f.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    filtroStatus === f.id 
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-900/30' 
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Cards / Lista de Chamados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chamadosFiltrados.map((item) => (
                <div key={item.id} className="relative">
                  <CardChamado chamado={item} />
                  <div className="absolute top-4 right-4">
                    <StatusBadge status={item.status} />
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        <Footer />
      </div>
    );
  }

  // -------------------------------------------------------------
  // TELA HOME (LOGADO)
  // -------------------------------------------------------------
  if (usuarioLogado) {
    const isFunc = usuarioLogado.perfil === 'funcionario';
    return (
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans flex flex-col justify-between">
        <Header usuario={usuarioLogado} onLogout={handleLogout} setTela={setTelaAtual} />

        <div className="flex flex-1">
          <Sidebar setTelaAtual={setTelaAtual} telaAtual={telaAtual} />

          <main className="flex-1 max-w-6xl mx-auto px-6 py-8">
            <div className="bg-[#111827] border border-slate-800 rounded-xl p-6 flex justify-between items-center mb-8 shadow-xl">
              <div>
                <h1 className="text-2xl font-extrabold text-white">
                  {isFunc ? 'Painel do ' : 'Bem-vindo, '}<span className="text-purple-400">{usuarioLogado.nome}</span>!
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                  {isFunc ? 'Central de gestão de chamados, equipamentos e infraestrutura de TI.' : 'Gerencie e acompanhe o atendimento da sua empresa em tempo real.'}
                </p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-md shadow-purple-900/40" onClick={() => setTelaAtual('chamados')}>
                + Abrir Chamado
              </button>
            </div>

            <h3 className="text-left text-lg font-bold text-white mb-4">Acesso Rápido</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#111827] border border-slate-800 hover:border-purple-600/50 p-5 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5 shadow-lg text-left" onClick={() => setTelaAtual('chamados')}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl">🎫</span>
                  <span className="text-xs font-bold bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">Fila Ativa</span>
                </div>
                <h4 className="font-bold text-white text-base">Meus Chamados</h4>
                <p className="text-slate-400 text-xs mt-1 mb-4">Acompanhe e responda o andamento dos seus tickets solicitados.</p>
                <span className="text-xs font-semibold text-purple-400">Ver lista completa →</span>
              </div>

              <div className="bg-[#111827] border border-purple-600/30 p-5 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5 shadow-lg text-left" onClick={() => setTelaAtual('chamados')}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl">➕</span>
                  <span className="text-xs font-bold bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded-md border border-purple-500/20">Rápido</span>
                </div>
                <h4 className="font-bold text-white text-base">Novo Chamado</h4>
                <p className="text-slate-400 text-xs mt-1 mb-4">Relate um problema de TI, erro em software ou peça suporte técnico.</p>
                <span className="text-xs font-semibold text-purple-400">Solicitar agora →</span>
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    );
  }

  // -------------------------------------------------------------
  // TELA DE LOGIN (DESLOGADO)
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row font-sans text-slate-100">
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between bg-slate-900 border-r border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-950 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 42 42" fill="none">
              <path d="M21 10L31 15V22C31 28.5 26.5 33.5 21 35C15.5 33.5 11 28.5 11 22V15L21 10Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M17 21L20 24L25 18" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-left">
            <span className="text-2xl font-black text-white block leading-none">Tech<span className="text-purple-500">Nexus</span></span>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider block mt-1">HELP DESK & TI</span>
          </div>
        </div>

        <div className="my-12 text-left">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Gestão Integrada <br />
            <span className="text-purple-400">de Chamados</span>
          </h1>
          <p className="text-slate-400 text-sm mt-3 max-w-md">
            Conecte atendimentos, equipamentos e sua equipe na plataforma centralizada TechNexus.
          </p>
        </div>

        <div className="text-xs text-slate-500 text-left">© 2026 TechNexus • Todos os direitos reservados</div>
      </div>

      <div className="lg:w-1/2 p-8 lg:p-16 flex items-center justify-center bg-[#0b0f19]">
        <div className="w-full max-w-md text-left">
          {!perfil ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Como deseja acessar?</h2>
              <p className="text-slate-400 text-sm mb-6">Selecione seu perfil para continuar no TechNexus</p>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setPerfil('cliente')}
                  className="w-full bg-slate-900 border border-slate-800 hover:border-purple-600 p-4 rounded-xl flex items-center gap-4 transition-all hover:-translate-y-0.5 text-left"
                >
                  <span className="text-2xl">👤</span>
                  <div>
                    <strong className="text-white text-sm block">Sou Cliente</strong>
                    <span className="text-slate-400 text-xs">Abrir e acompanhar chamados</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPerfil('funcionario')}
                  className="w-full bg-slate-900 border border-slate-800 hover:border-purple-600 p-4 rounded-xl flex items-center gap-4 transition-all hover:-translate-y-0.5 text-left"
                >
                  <span className="text-2xl">🛠️</span>
                  <div>
                    <strong className="text-white text-sm block">Sou Funcionário / TI</strong>
                    <span className="text-slate-400 text-xs">Gestão e atendimento (N1, N2, N3)</span>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <button type="button" onClick={() => setPerfil(null)} className="text-xs text-purple-400 font-semibold hover:underline">
                  ← Trocar Perfil
                </button>
                <span className="text-xs font-bold bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/20">
                  {perfil === 'cliente' ? 'Cliente' : 'Equipe Técnica / TI'}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">Acesse sua conta</h2>
              <p className="text-slate-400 text-sm mb-4">Informe suas credenciais para entrar no TechNexus</p>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">E-mail corporativo</label>
                <input
                  type="email"
                  required
                  placeholder="seunome@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Senha</label>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-3 rounded-lg transition-colors shadow-lg shadow-purple-900/40">
                Entrar no Sistema
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
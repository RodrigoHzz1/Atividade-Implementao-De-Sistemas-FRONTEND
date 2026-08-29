
import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    FiHome,
    FiClipboard,
    FiPlusCircle,
    FiUsers,
    FiTool,
    FiBarChart2,
    FiSettings,
    FiChevronLeft,
    FiChevronRight,
    FiX
} from "react-icons/fi";

import "./style.css";

export default function Sidebar() {
    const [recolhido, setRecolhido] = useState(false);
    const [mobileAberto, setMobileAberto] = useState(false);

    function fecharMobile() {
        setMobileAberto(false);
    }

    return (
        <>
            {/* BOTÃO PARA ABRIR NO CELULAR */}
            <button
                className="sidebar-mobile-button"
                onClick={() => setMobileAberto(true)}
                aria-label="Abrir menu"
            >
                ☰
            </button>

            {/* FUNDO MOBILE */}
            {mobileAberto && (
                <div
                    className="sidebar-overlay"
                    onClick={fecharMobile}
                />
            )}

            <aside
                className={`
                    sidebar
                    ${recolhido ? "sidebar-recolhida" : ""}
                    ${mobileAberto ? "sidebar-mobile-aberta" : ""}
                `}
            >

                {/* CABEÇALHO */}
                <div className="sidebar-header">

                    <div className="sidebar-brand">

                        <div className="sidebar-logo">
                            TN
                        </div>

                        <div className="sidebar-brand-text">
                            <strong>TecNexus</strong>
                            <span>Suporte Técnico</span>
                        </div>

                    </div>

                    {/* FECHAR MOBILE */}
                    <button
                        className="sidebar-mobile-close"
                        onClick={fecharMobile}
                        aria-label="Fechar menu"
                    >
                        <FiX />
                    </button>

                </div>

                {/* MENU */}
                <nav className="sidebar-nav">

                    <p className="sidebar-title">
                        PRINCIPAL
                    </p>

                    <NavLink
                        to="/"
                        end
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiHome />

                        <span>
                            Início
                        </span>
                    </NavLink>

                    <NavLink
                        to="/dashboard"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiBarChart2 />

                        <span>
                            Dashboard
                        </span>
                    </NavLink>

                    <NavLink
                        to="/chamados"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiClipboard />

                        <span>
                            Chamados
                        </span>
                    </NavLink>

                    <NavLink
                        to="/novo-chamado"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiPlusCircle />

                        <span>
                            Novo chamado
                        </span>
                    </NavLink>

                    <p className="sidebar-title">
                        GERENCIAMENTO
                    </p>

                    <NavLink
                        to="/clientes"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiUsers />

                        <span>
                            Clientes
                        </span>
                    </NavLink>

                    <NavLink
                        to="/funcionarios"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiUsers />

                        <span>
                            Funcionários
                        </span>
                    </NavLink>

                    <NavLink
                        to="/equipamentos"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiTool />

                        <span>
                            Equipamentos
                        </span>
                    </NavLink>

                    <p className="sidebar-title">
                        SISTEMA
                    </p>

                    <NavLink
                        to="/relatorios"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiBarChart2 />

                        <span>
                            Relatórios
                        </span>
                    </NavLink>

                    <NavLink
                        to="/configuracoes"
                        onClick={fecharMobile}
                        className="sidebar-link"
                    >
                        <FiSettings />

                        <span>
                            Configurações
                        </span>
                    </NavLink>

                </nav>

                {/* BOTÃO RECOLHER */}
                <button
                    className="sidebar-collapse"
                    onClick={() => setRecolhido(!recolhido)}
                    aria-label={
                        recolhido
                            ? "Expandir menu"
                            : "Recolher menu"
                    }
                >
                    {recolhido ? (
                        <FiChevronRight />
                    ) : (
                        <FiChevronLeft />
                    )}

                    {!recolhido && (
                        <span>
                            Recolher menu
                        </span>
                    )}
                </button>

            </aside>
        </>
    );
}


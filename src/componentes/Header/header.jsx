
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FiBell,
    FiMenu,
    FiX,
    FiUser,
    FiLogOut
} from "react-icons/fi";

import "./style.css";

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    function fecharMenu() {
        setMenuAberto(false);
    }

    return (
        <header className="header">

            <div className="header-container">

                {/* LOGO */}
                <Link
                    to="/"
                    className="header-logo"
                    onClick={fecharMenu}
                >
                    <div className="logo-icon">
                        TN
                    </div>

                    <div className="logo-text">
                        <strong>TecNexus</strong>
                        <span>Suporte Técnico</span>
                    </div>
                </Link>

                {/* NAVEGAÇÃO DESKTOP */}
                <nav className="header-nav">

                    <Link to="/">
                        Início
                    </Link>

                    <Link to="/chamados">
                        Chamados
                    </Link>

                    <Link to="/equipamentos">
                        Equipamentos
                    </Link>

                    <Link to="/relatorios">
                        Relatórios
                    </Link>

                </nav>

                {/* AÇÕES */}
                <div className="header-actions">

                    <button
                        className="header-notification"
                        aria-label="Notificações"
                    >
                        <FiBell />

                        <span className="notification-badge">
                            3
                        </span>
                    </button>

                    <div className="header-user">

                        <div className="user-avatar">
                            <FiUser />
                        </div>

                        <div className="user-info">
                            <strong>Usuário</strong>
                            <span>Funcionário</span>
                        </div>

                    </div>

                    <button
                        className="header-logout"
                        aria-label="Sair"
                        title="Sair"
                    >
                        <FiLogOut />
                    </button>

                </div>

                {/* BOTÃO MOBILE */}
                <button
                    className="menu-button"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label="Abrir menu"
                >
                    {menuAberto ? <FiX /> : <FiMenu />}
                </button>

            </div>

            {/* MENU MOBILE */}
            <div
                className={`mobile-menu ${
                    menuAberto ? "mobile-menu-aberto" : ""
                }`}
            >

                <nav>

                    <Link
                        to="/"
                        onClick={fecharMenu}
                    >
                        Início
                    </Link>

                    <Link
                        to="/chamados"
                        onClick={fecharMenu}
                    >
                        Chamados
                    </Link>

                    <Link
                        to="/equipamentos"
                        onClick={fecharMenu}
                    >
                        Equipamentos
                    </Link>

                    <Link
                        to="/relatorios"
                        onClick={fecharMenu}
                    >
                        Relatórios
                    </Link>

                </nav>

                <div className="mobile-user">

                    <div className="user-avatar">
                        <FiUser />
                    </div>

                    <div>
                        <strong>Usuário</strong>
                        <span>Funcionário</span>
                    </div>

                </div>

                <button className="mobile-logout">
                    <FiLogOut />
                    Sair
                </button>

            </div>

        </header>
    );
}


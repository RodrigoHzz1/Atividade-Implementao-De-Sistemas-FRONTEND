
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiGithub
} from "react-icons/fi";

import "./style.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* SOBRE */}
                <div className="footer-section footer-about">
                    <h2>TecNexus</h2>

                    <p>
                        Sistema de gerenciamento de suporte técnico,
                        desenvolvido para facilitar o atendimento,
                        acompanhamento e resolução de chamados.
                    </p>
                </div>

                {/* NAVEGAÇÃO */}
                <div className="footer-section">
                    <h3>Navegação</h3>

                    <ul>
                        <li>
                            <a href="/">Início</a>
                        </li>

                        <li>
                            <a href="/chamados">Chamados</a>
                        </li>

                        <li>
                            <a href="/equipamentos">Equipamentos</a>
                        </li>

                        <li>
                            <a href="/relatorios">Relatórios</a>
                        </li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div className="footer-section">
                    <h3>Contato</h3>

                    <div className="footer-contact">
                        <span>
                            <FiMail />
                            suporte@tecnexus.com
                        </span>

                        <span>
                            <FiPhone />
                            (00) 00000-0000
                        </span>

                        <span>
                            <FiMapPin />
                            Brasil
                        </span>
                    </div>
                </div>

                {/* REDES */}
                <div className="footer-section">
                    <h3>Redes</h3>

                    <div className="footer-social">
                        <a
                            href="#"
                            aria-label="GitHub"
                        >
                            <FiGithub />
                        </a>
                    </div>
                </div>

            </div>

            {/* RODAPÉ INFERIOR */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} TecNexus. Todos os direitos reservados.
                </p>

                <p>
                    Sistema de Suporte Técnico
                </p>
            </div>
        </footer>
    );
}



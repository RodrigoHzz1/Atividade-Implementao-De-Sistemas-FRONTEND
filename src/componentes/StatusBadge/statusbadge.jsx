
import {
    FiCheckCircle,
    FiClock,
    FiAlertCircle,
    FiXCircle,
    FiLoader
} from "react-icons/fi";

import "./style.css";

export default function StatusBadge({ status }) {

    const statusNormalizado = status
        ?.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

    const statusConfig = {

        aberto: {
            texto: "Aberto",
            icone: <FiAlertCircle />,
            classe: "status-aberto"
        },

        "em-atendimento": {
            texto: "Em atendimento",
            icone: <FiLoader />,
            classe: "status-atendimento"
        },

        pendente: {
            texto: "Pendente",
            icone: <FiClock />,
            classe: "status-pendente"
        },

        resolvido: {
            texto: "Resolvido",
            icone: <FiCheckCircle />,
            classe: "status-resolvido"
        },

        fechado: {
            texto: "Fechado",
            icone: <FiCheckCircle />,
            classe: "status-fechado"
        },

        cancelado: {
            texto: "Cancelado",
            icone: <FiXCircle />,
            classe: "status-cancelado"
        }
    };

    const configuracao = statusConfig[statusNormalizado] || {
        texto: status || "Desconhecido",
        icone: <FiClock />,
        classe: "status-padrao"
    };

    return (
        <span
            className={`status-badge ${configuracao.classe}`}
        >
            {configuracao.icone}

            <span>
                {configuracao.texto}
            </span>
        </span>
    );
}


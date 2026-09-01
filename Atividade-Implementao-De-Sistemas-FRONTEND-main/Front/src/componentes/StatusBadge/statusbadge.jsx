import React from "react";
import "./statusbadge.css";

export default function StatusBadge({ status }) {
  const statusFormatado = status ? status.toLowerCase().trim() : "";

  const getStatusConfig = () => {
    switch (statusFormatado) {
      case "aberto":
        return { label: "Aberto", className: "status-aberto", icon: "🔵" };

      case "em andamento":
      case "em atendimento":
      case "atendimento":
      case "emandamento":
        return {
          label: "Em Atendimento",
          className: "status-atendimento",
          svgIcon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
            </svg>
          ),
        };

      case "pendente":
        return { label: "Pendente", className: "status-pendente", icon: "🟣" };

      case "concluído":
      case "concluido":
      case "resolvido":
        return { label: "Resolvido", className: "status-resolvido", icon: "🟢" };

      case "fechado":
        return { label: "Fechado", className: "status-fechado", icon: "⚪" };

      case "cancelado":
        return { label: "Cancelado", className: "status-cancelado", icon: "🔴" };

      default:
        return { label: status || "Padrão", className: "status-padrao", icon: "🔘" };
    }
  };

  const { label, className, icon, svgIcon } = getStatusConfig();

  return (
    <span className={`status-badge ${className}`}>
      {svgIcon ? svgIcon : <span>{icon}</span>}
      {label}
    </span>
  );
}
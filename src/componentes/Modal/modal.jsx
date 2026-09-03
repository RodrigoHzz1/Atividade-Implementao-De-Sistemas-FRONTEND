
import { FiX } from "react-icons/fi";
import "./style.css";

export default function Modal({
    aberto,
    fechar,
    titulo,
    children,
    textoBotao,
    acao,
    tipo = "normal",
}) {
    if (!aberto) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={fechar}>

            <div
                className="modal-container"
                onClick={(event) => event.stopPropagation()}
            >

                {/* CABEÇALHO */}
                <div className="modal-header">

                    <h2>{titulo}</h2>

                    <button
                        type="button"
                        className="modal-fechar"
                        onClick={fechar}
                        aria-label="Fechar modal"
                    >
                        <FiX />
                    </button>

                </div>

                {/* CONTEÚDO */}
                <div className="modal-content">
                    {children}
                </div>

                {/* BOTÕES */}
                <div className="modal-footer">

                    <button
                        type="button"
                        className="modal-button modal-cancelar"
                        onClick={fechar}
                    >
                        Cancelar
                    </button>

                    <button
                        type="button"
                        className={`modal-button modal-confirmar ${tipo}`}
                        onClick={acao}
                    >
                        {textoBotao || "Confirmar"}
                    </button>

                </div>

            </div>

        </div>
    );
}


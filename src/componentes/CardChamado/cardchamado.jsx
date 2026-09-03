
import { Link } from "react-router-dom";
import {
    FiClock,
    FiUser,
    FiAlertCircle,
    FiArrowRight
} from "react-icons/fi";

import "./style.css";

export default function CardChamado({
    id,
    titulo,
    descricao,
    cliente,
    prioridade,
    status,
    data,
}) {
    return (
        <article className="card-chamado">

            <div className="card-chamado-topo">

                <span className="card-chamado-id">
                    #{id}
                </span>

                <span
                    className={`card-prioridade ${prioridade
                        ?.toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")}`}
                >
                    <FiAlertCircle />
                    {prioridade}
                </span>

            </div>

            <div className="card-chamado-conteudo">

                <h3>{titulo}</h3>

                <p className="card-descricao">
                    {descricao}
                </p>

                <div className="card-informacoes">

                    <div className="card-info">
                        <FiUser />
                        <span>{cliente}</span>
                    </div>

                    <div className="card-info">
                        <FiClock />
                        <span>{data}</span>
                    </div>

                </div>

            </div>

            <div className="card-chamado-rodape">

                <span
                    className={`card-status ${status
                        ?.toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, "-")}`}
                >
                    {status}
                </span>

                <Link
                    to={`/chamados/${id}`}
                    className="card-detalhes"
                >
                    Ver detalhes
                    <FiArrowRight />
                </Link>

            </div>

        </article>
    );
}



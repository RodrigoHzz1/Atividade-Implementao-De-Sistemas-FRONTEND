
import { FiLoader } from "react-icons/fi";
import "./style.css";

export default function Loading({ texto = "Carregando..." }) {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <FiLoader />
            </div>

            <p>{texto}</p>
        </div>
    );
}



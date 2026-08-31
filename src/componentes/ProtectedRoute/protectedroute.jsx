
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../Loading";

export default function ProtectedRoute() {
    const { usuario, carregando } = useAuth();
    const location = useLocation();

    /*
     * Enquanto verificamos a autenticação,
     * mostramos o componente de Loading.
     */
    if (carregando) {
        return <Loading texto="Verificando acesso..." />;
    }

    /*
     * Se não estiver autenticado,
     * volta para a página de Login.
     *
     * O state guarda a página que o usuário
     * tentou acessar.
     */
    if (!usuario) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    /*
     * Se estiver autenticado,
     * libera a página protegida.
     */
    return <Outlet />;
}


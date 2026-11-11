
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutaProtegida({ rolesPermitidos }) {
  const { usuarioActual } = useAuth();

  // Si no ha iniciado sesión, lo enviamos al login.
  if (!usuarioActual) {
    return <Navigate to="/login" replace />;
  }

  // Verificamos si el rol tiene permiso para entrar.
  if (!rolesPermitidos.includes(usuarioActual.rol)) {
    return <Navigate to="/inicio" replace />;
  }

  return <Outlet />;
}

export default RutaProtegida;

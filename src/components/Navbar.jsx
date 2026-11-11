
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { usuarioActual, cerrarSesion } = useAuth();

  const rol = usuarioActual?.rol;

  return (
    <nav className="navbar">
      <Link to="/inicio" className="logo">
        FOPARRA
      </Link>

      <div className="nav-links">
        <Link to="/inicio">Inicio</Link>

        {(rol === "Administrador" || rol === "Recepcionista") && (
          <Link to="/propietarios">Propietarios</Link>
        )}

        {(rol === "Administrador" || rol === "Veterinario") && (
          <Link to="/mascotas">Mascotas</Link>
        )}

        <Link to="/citas">Citas</Link>
      </div>

      <div className="usuario-menu">
        <span>{usuarioActual?.usuario} ({rol})</span>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;

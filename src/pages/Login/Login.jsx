
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const { iniciarSesion, usuarioActual } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  if (usuarioActual) {
    return <Navigate to="/inicio" replace />;
  }

  function manejarIngreso(e) {
    e.preventDefault();

    const correcto = iniciarSesion(usuario, clave);

    if (correcto) {
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  }

  return (
    <main className="login-container">
      <form className="login-card" onSubmit={manejarIngreso}>
        <h1>Veterinaria FOPARRA</h1>
        <p>Inicia sesión para continuar</p>

        <label>Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Ingresa tu usuario"
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
        />

        {error && <p className="mensaje-error">{error}</p>}

        <button type="submit">Ingresar</button>

        <div className="credenciales">
          <p><strong>Usuarios de prueba:</strong></p>
          <p>admin / 1234</p>
          <p>vet / 1234</p>
          <p>recep / 1234</p>
        </div>
      </form>
    </main>
  );
}

export default Login;


import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const usuarios = [
  {
    usuario: "admin",
    clave: "1234",
    rol: "Administrador",
  },
  {
    usuario: "vet",
    clave: "1234",
    rol: "Veterinario",
  },
  {
    usuario: "recep",
    clave: "1234",
    rol: "Recepcionista",
  },
];

export function AuthProvider({ children }) {
  const [usuarioActual, setUsuarioActual] = useState(() => {
    const sesionGuardada = localStorage.getItem("usuario");

    return sesionGuardada ? JSON.parse(sesionGuardada) : null;
  });

  function iniciarSesion(usuario, clave) {
    const encontrado = usuarios.find(
      (u) => u.usuario === usuario && u.clave === clave
    );

    if (!encontrado) {
      return false;
    }

    const datosUsuario = {
      usuario: encontrado.usuario,
      rol: encontrado.rol,
    };

    localStorage.setItem("usuario", JSON.stringify(datosUsuario));
    setUsuarioActual(datosUsuario);

    return true;
  }

  function cerrarSesion() {
    localStorage.removeItem("usuario");
    setUsuarioActual(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuarioActual,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

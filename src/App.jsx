
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Inicio from "./pages/Inicio/Inicio";
import Propietarios from "./pages/Propietarios/Propietarios";
import Mascotas from "./pages/Mascotas/Mascotas";
import Citas from "./pages/Citas/Citas";

import Navbar from "./components/Navbar";
import RutaProtegida from "./components/RutaProtegida";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<RutaProtegida rolesPermitidos={["Administrador", "Veterinario", "Recepcionista"]} />}>
          <Route path="/inicio" element={<><Navbar /><Inicio /></>} />
        </Route>

        <Route element={<RutaProtegida rolesPermitidos={["Administrador", "Recepcionista"]} />}>
          <Route path="/propietarios" element={<><Navbar /><Propietarios /></>} />
        </Route>

        <Route element={<RutaProtegida rolesPermitidos={["Administrador", "Veterinario"]} />}>
          <Route path="/mascotas" element={<><Navbar /><Mascotas /></>} />
        </Route>

        <Route element={<RutaProtegida rolesPermitidos={["Administrador", "Veterinario", "Recepcionista"]} />}>
          <Route path="/citas" element={<><Navbar /><Citas /></>} />
        </Route>

        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

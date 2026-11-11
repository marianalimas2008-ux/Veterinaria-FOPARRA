
import { useAuth } from "../../context/AuthContext";

function Inicio() {
  const { usuarioActual } = useAuth();

  return (
    <section className="pagina">
      <h1>Bienvenido a Veterinaria FOPARRA</h1>

      <p>
        Hola, <strong>{usuarioActual?.usuario}</strong>.
        Has iniciado sesión como {usuarioActual?.rol}.
      </p>

      <div className="panel-bienvenida">
        <h2>Panel principal</h2>
        <p>
          Desde aquí puedes acceder a las opciones disponibles
          según tu rol dentro de la veterinaria.
        </p>
      </div>
    </section>
  );
}

export default Inicio;

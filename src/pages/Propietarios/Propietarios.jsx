
import { useState } from "react";

function Propietarios() {
  const [propietarios, setPropietarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [editando, setEditando] = useState(null);

  function guardarPropietario(e) {
    e.preventDefault();

    const nuevoPropietario = {
      id: editando ?? Date.now(),
      nombre,
      telefono,
      correo,
    };

    if (editando !== null) {
      setPropietarios(
        propietarios.map((p) =>
          p.id === editando ? nuevoPropietario : p
        )
      );
      setEditando(null);
    } else {
      setPropietarios([...propietarios, nuevoPropietario]);
    }

    limpiarFormulario();
  }

  function editarPropietario(propietario) {
    setNombre(propietario.nombre);
    setTelefono(propietario.telefono);
    setCorreo(propietario.correo);
    setEditando(propietario.id);
  }

  function eliminarPropietario(id) {
    const confirmar = window.confirm(
      "¿Estás segura de eliminar este propietario?"
    );

    if (confirmar) {
      setPropietarios(propietarios.filter((p) => p.id !== id));
    }
  }

  function limpiarFormulario() {
    setNombre("");
    setTelefono("");
    setCorreo("");
    setEditando(null);
  }

  return (
    <section className="pagina">
      <h1>Gestión de Propietarios</h1>
      <p>Registra y administra la información de los propietarios.</p>

      <form className="formulario" onSubmit={guardarPropietario}>
        <h2>{editando !== null ? "Editar propietario" : "Registrar propietario"}</h2>

        <label>Nombre completo</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del propietario"
          required
        />

        <label>Teléfono</label>
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Número de teléfono"
          required
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="Correo electrónico"
          required
        />

        <div className="acciones-formulario">
          <button type="submit">
            {editando !== null ? "Actualizar" : "Guardar"}
          </button>

          {editando !== null && (
            <button type="button" className="boton-secundario" onClick={limpiarFormulario}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="tabla-contenedor">
        <h2>Lista de propietarios</h2>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {propietarios.length === 0 ? (
              <tr>
                <td colSpan="4">No hay propietarios registrados.</td>
              </tr>
            ) : (
              propietarios.map((p) => (
                <tr key={p.id}>
                  <td>{p.nombre}</td>
                  <td>{p.telefono}</td>
                  <td>{p.correo}</td>
                  <td>
                    <button onClick={() => editarPropietario(p)}>
                      Editar
                    </button>
                    <button
                      className="boton-eliminar"
                      onClick={() => eliminarPropietario(p.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Propietarios;

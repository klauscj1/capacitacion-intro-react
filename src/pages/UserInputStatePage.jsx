import { useState } from "react";

export function UserInputStatePage() {
  const [user, setUser] = useState({
    id: 1,
    nombre: "Claus",
    apellido: "Chocho",
    admin: false,
  });

  const handleOnChangeInput = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const { nombre, apellido } = user;

  return (
    <div className="main_container text-center">
      <h1 style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        User Input State Page
      </h1>
      <input
        type="text"
        name="nombre"
        id="nombretxt"
        placeholder="Tu nombre"
        value={nombre}
        onChange={handleOnChangeInput}
      />
      <br />
      <br />
      <input
        type="text"
        name="apellido"
        id="apellidotxt"
        placeholder="Tu apellido"
        value={apellido}
        onChange={handleOnChangeInput}
      />
      <br />
      <br />
      <code>{JSON.stringify(user, null, 4)}</code>
    </div>
  );
}

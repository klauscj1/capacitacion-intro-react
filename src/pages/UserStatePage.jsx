import { useState } from "react";

export function UserStatePage() {
  const [user, setUser] = useState({
    id: 1,
    nombre: "Claus",
    apellido: "Chocho",
    admin: false,
  });

  function handlerOnClickToAdmin() {
    setUser({ ...user, admin: true });
  }

  const handlerOnClickToNoAdmin = () => {
    setUser({ ...user, admin: false });
  };

  const { admin } = user;

  console.log("render");
  return (
    <div className="main_container text-center">
      <h1 style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        User State Page
      </h1>
      <code>{JSON.stringify(user, null, 4)}</code>
      <br />
      <br />
      {/* if solo y solo si cumple la condicion */}
      {admin !== true && (
        <button onClick={handlerOnClickToAdmin}>Set Admin</button>
      )}
      <br />
      <br />
      {admin === true && (
        <button onClick={handlerOnClickToNoAdmin}>Set not Admin</button>
      )}
      <br />
      <br />

      {/* If ternario  -> condicion ? valor cuando cumple  la condicion : valor cuando no cumple la condicion */}
      {admin === true ? (
        <div className="box_container admin">
          <h1>Eres admin</h1>
        </div>
      ) : (
        <div className="box_container no_admin">
          <h1>No eres admin</h1>
        </div>
      )}
    </div>
  );
}

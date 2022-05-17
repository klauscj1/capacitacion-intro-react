import { useState } from "react";
import "../styles/login.css";

export const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handlerLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario ", formValues);
  };

  return (
    <div className="main_container login_container">
      <h1>Login Page</h1>
      <p className="descripcion">
        Ingresa tus credenciales para acceder al sistema
      </p>
      <form onSubmit={handlerLoginSubmit}>
        <div className="form_control">
          <label className="etiqueta" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form_control">
          <label className="etiqueta" htmlFor="password">
            Contraseña
          </label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="login_button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

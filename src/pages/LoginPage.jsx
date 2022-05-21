import { useState } from "react";
import "../styles/login.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formValues;

  const handlerLoginSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario ", formValues);
    if (
      formValues.email === "clauschochoe@gmail.com" &&
      formValues.password === "123456"
    ) {
      navigate("/home");
    } else {
      Swal.fire("Error", "Credenciales incorrectas", "error");
    }
  };

  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
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
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handlerOnChange}
          />
        </div>
        <div className="form_control">
          <label className="etiqueta" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlerOnChange}
          />
        </div>
        <button type="submit" className="login_button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

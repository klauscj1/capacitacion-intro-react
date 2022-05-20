import { useState } from "react";
import "../styles/calculadora.css";
export function Calculadora() {
  const [entrada, setEntrada] = useState("0");
  const [primerNumero, setPrimerNumero] = useState(0);
  const [operacionAnterior, setOperacionAnterior] = useState("");

  const handlerClickNumber = (numero) => {
    if (entrada === "0") {
      setEntrada(numero + "");
    } else {
      setEntrada((prev) => prev + numero);
    }
  };

  const handlerOnClickOperations = (operacion) => {
    if (entrada !== "0") {
      switch (operacion) {
        case "+":
          setPrimerNumero(primerNumero + parseInt(entrada));
          setEntrada("0");
          setOperacionAnterior("+");
          break;
        case "-":
          if (primerNumero !== 0) {
            setPrimerNumero(primerNumero - parseInt(entrada));
          } else {
            setPrimerNumero(parseInt(entrada));
          }
          setEntrada("0");
          setOperacionAnterior("-");
          break;
        case "*":
          if (primerNumero !== 0) {
            setPrimerNumero(primerNumero * parseInt(entrada));
          } else {
            setPrimerNumero(parseInt(entrada));
          }
          setEntrada("0");
          setOperacionAnterior("*");
          break;
        case "/":
          if (primerNumero !== 0) {
            setPrimerNumero(primerNumero / parseInt(entrada));
          } else {
            setPrimerNumero(parseInt(entrada));
          }
          setEntrada("0");
          setOperacionAnterior("/");
          break;
        case "ac":
          setEntrada("0");
          setPrimerNumero(0);
          setOperacionAnterior("");
          break;
        case "=":
          if (operacionAnterior === "+") {
            setEntrada(primerNumero + parseInt(entrada));
            setPrimerNumero(0);
            setOperacionAnterior("");
          } else if (operacionAnterior === "-") {
            setEntrada(primerNumero - parseInt(entrada));
            setPrimerNumero(0);
            setOperacionAnterior("");
          } else if (operacionAnterior === "*") {
            setEntrada(primerNumero * parseInt(entrada));
            setPrimerNumero(0);
            setOperacionAnterior("");
          } else if (operacionAnterior === "/") {
            setEntrada(primerNumero / parseInt(entrada));
            setPrimerNumero(0);
            setOperacionAnterior("");
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="main_container">
      <h1>Calculadora</h1>
      <h3 className="display">{entrada}</h3>
      <div className="fila">
        <button onClick={() => handlerClickNumber(9)}>9</button>
        <button onClick={() => handlerClickNumber(8)}>8</button>
        <button onClick={() => handlerClickNumber(7)}>7</button>
        <button onClick={() => handlerOnClickOperations("+")}>+</button>
      </div>
      <div className="fila">
        <button onClick={() => handlerClickNumber(6)}>6</button>
        <button onClick={() => handlerClickNumber(5)}>5</button>
        <button onClick={() => handlerClickNumber(4)}>4</button>
        <button onClick={() => handlerOnClickOperations("-")}>-</button>
      </div>
      <div className="fila">
        <button onClick={() => handlerClickNumber(3)}>3</button>
        <button onClick={() => handlerClickNumber(2)}>2</button>
        <button onClick={() => handlerClickNumber(1)}>1</button>
        <button onClick={() => handlerOnClickOperations("*")}>*</button>
      </div>
      <div className="fila">
        <button onClick={() => handlerOnClickOperations("ac")}>AC</button>
        <button onClick={() => handlerClickNumber(0)}>0</button>
        <button onClick={() => handlerOnClickOperations("=")}>=</button>
        <button onClick={() => handlerOnClickOperations("/")}>/</button>
      </div>
      {/* Agregar las operaciones de raiz cuadra y potenciación */}
    </div>
  );
}

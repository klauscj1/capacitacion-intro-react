import { useState } from "react";

export const CounterFuncionPropsPage = () => {
  //hooks
  //Mantener el estado = useState
  // useState retorna un vector/array cuyo primer valor es la variable
  //           el segundo valor es la funcion que modifica esa variable
  //           y debo pasarle a useState el valor inicial de mi variable

  const [counter, setCounter] = useState(0);

  const handlerOnClick = (valor) => {
    console.log("valor -> ", valor);
    const newCounter = counter + valor;
    setCounter(newCounter);
  };

  console.log("counter", counter);
  return (
    <div className="main_container text-center">
      <h1>Counter Function Props Page</h1>
      <br />
      <br />
      <span>Counter {counter}</span>
      <br />
      <br />
      <button onClick={() => handlerOnClick(1)}> + 1</button>
      <br />
      <br />
      <button onClick={() => handlerOnClick(-1)}> -1</button>
      <br />
      <br />
      <button onClick={() => handlerOnClick(5)}> 5</button>
      <br />
      <br />
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

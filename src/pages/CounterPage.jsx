import { useState } from "react";

export const CounterPage = () => {
  //hooks
  //Mantener el estado = useState
  // useState retorna un vector/array cuyo primer valor es la variable
  //           el segundo valor es la funcion que modifica esa variable
  //           y debo pasarle a useState el valor inicial de mi variable

  const [counter, setCounter] = useState(0);

  const handlerOnClick = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const handlerOnClickRest = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  console.log("counter", counter);
  return (
    <div className="main_container text-center">
      <h1>CounterPage</h1>
      <br />
      <br />
      <span>Counter {counter}</span>
      <br />
      <br />
      <button onClick={handlerOnClick}> + 1</button>
      <br />
      <br />
      <button onClick={handlerOnClickRest}> -1</button>
    </div>
  );
};

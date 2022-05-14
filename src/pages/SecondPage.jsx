import { MessageText } from "../components/Message";
// Functional component
export const SecongPage = () => {
  return (
    <div className="main_container">
      <h1>Second Page</h1>
      <br />
      <MessageText message={"USTED HA INGRESADO EL NUMERO 1"} name="Claus 1" />
      <MessageText message={"USTED HA INGRESADO EL NUMERO 2"} name="Claus 2" />
      <MessageText message={"USTED HA INGRESADO EL NUMERO 3"} name="Claus 3" />
      <MessageText message={"USTED HA INGRESADO EL NUMERO 4"} name="Claus 4" />
      <MessageText message={"USTED HA INGRESADO EL NUMERO 5"} name="Claus 5" />
    </div>
  );
};

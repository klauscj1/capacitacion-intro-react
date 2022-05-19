import { useState } from "react";
import "../styles/notes.css";
import "../styles/login.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { NoteForm } from "../components/NoteForm";
import { NoteList } from "../components/NoteList";

export const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const { title, description } = formValues;

  const pendientes = notes.filter((note) => note.finished === false).length;

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    if (formValues.title.trim() !== "") {
      if (formValues.description.trim() !== "") {
        const newNote = {
          ...formValues,
          id: new Date().getMilliseconds() + notes.length + 1,
          finished: false,
          finishedDate: null,
        };
        const newNotes = [newNote, ...notes];
        setNotes(newNotes);
        setFormValues({ title: "", description: "" });
      } else {
        Swal.fire("Error", "La descripción es requerida", "error");
      }
    } else {
      Swal.fire("Error", "El titulo es requerido", "error");
    }
  };

  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handlerChangeState = (id) => {
    //Actualizar el estado del atributo del objeto dentro del array
    //forma tradicional
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        note.finished = !note.finished;
        note.finishedDate = new Date();
      }
      return note;
    });
    setNotes(updatedNotes);

    //forma simplificada

    // setNotes((prevState) =>
    //   prevState.map((note) => {
    //     if (note.id === id) {
    //       note.finished = !note.finished;
    //     }
    //     return note;
    //   })
    // );
  };

  return (
    <div className="main_container notes_container">
      <div className="izquierda">
        <NoteForm
          description={description}
          title={title}
          handlerOnSubmit={handlerOnSubmit}
          handlerOnChange={handlerOnChange}
        />
      </div>
      <div className="derecha">
        <NoteList
          notes={notes}
          handlerChangeState={handlerChangeState}
          pendientes={pendientes}
        />
      </div>
    </div>
  );
};

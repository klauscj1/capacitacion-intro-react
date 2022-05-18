import { useState } from "react";
import "../styles/notes.css";
import "../styles/login.css";

export const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  const { title, description } = formValues;

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    if (formValues.title.trim() !== "") {
      setErrors({ ...errors, ["title"]: null });
      if (formValues.description.trim() !== "") {
        setErrors({});
        const newNote = {
          ...formValues,
          id: new Date().getMilliseconds() + notes.length + 1,
          finished: false,
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
        setFormValues({ title: "", description: "" });
      } else {
        setErrors({
          ...errors,
          ["description"]: "Debe ingresar la descripción",
        });
      }
    } else {
      setErrors({ ...errors, ["title"]: "Debe ingresar el titulo" });
    }
  };

  const handlerOnChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="main_container notes_container">
      <div className="izquierda">
        <h1>Notes Page</h1>
        <p>Crea una nueva nota</p>
        <form onSubmit={handlerOnSubmit} className="form">
          <div className="form_control">
            <label className="etiqueta" htmlFor="title">
              Titulo
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handlerOnChange}
            />
          </div>
          {errors["title"] && <p className="error">{errors["title"]}</p>}
          <div className="form_control">
            <label className="etiqueta" htmlFor="description">
              Descripción
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handlerOnChange}
            />
          </div>
          {errors["description"] && (
            <p className="error">{errors["description"]}</p>
          )}
          <button type="submit" className="login_button">
            Guardar
          </button>
        </form>
      </div>
      <div className="derecha">
        <h1>Lista de notas</h1>
        {notes.map((note) => {
          return (
            <div key={note.id} className="note_container">
              <h3
                className={`note_title ${note.finished ? "note_finished" : ""}`}
              >
                {note.title}
              </h3>
              <code className="note_description">{note.description}</code>
              <span
                className={`note_state ${
                  note.finished ? "note_completed" : "note_pending"
                }`}
              >
                {note.finished ? "Completado" : "Pendiente"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

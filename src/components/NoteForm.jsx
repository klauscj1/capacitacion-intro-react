export const NoteForm = ({
  handlerOnSubmit,
  title,
  handlerOnChange,
  description,
}) => {
  return (
    <>
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

        <button type="submit" className="login_button">
          Guardar
        </button>
      </form>
    </>
  );
};

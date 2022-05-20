export const NoteItem = ({ note, handlerChangeState, handlerOnDelete }) => {
  return (
    <div key={note.id} className="note_container">
      <h3
        className={`note_title ${note.finished ? "note_finished" : ""}`}
        onClick={() => handlerChangeState(note.id)}
      >
        {note.title}
      </h3>
      <code className="note_description">{note.description}</code>
      <span
        className={`note_state ${
          note.finished ? "note_completed" : "note_pending"
        }`}
      >
        <p>
          {note.finished
            ? `Completado en ${note.finishedDate.toISOString()}`
            : "Pendiente"}
        </p>

        <button className="espacio" onClick={() => handlerOnDelete(note.id)}>
          Eliminar
        </button>
      </span>
    </div>
  );
};

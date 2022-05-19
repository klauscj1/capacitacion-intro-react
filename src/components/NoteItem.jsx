export const NoteItem = ({ note, handlerChangeState }) => {
  return (
    <div
      key={note.id}
      className="note_container"
      onClick={() => handlerChangeState(note.id)}
    >
      <h3 className={`note_title ${note.finished ? "note_finished" : ""}`}>
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
      </span>
    </div>
  );
};

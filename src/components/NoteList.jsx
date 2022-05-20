import { NoteItem } from "./NoteItem";

export const NoteList = ({
  notes,
  handlerChangeState,
  pendientes,
  handlerOnDelete,
}) => {
  const completas = notes.length - pendientes;
  return (
    <>
      <h1>Lista de notas</h1>
      {notes.length > 0 && (
        <div>
          <h3>Pendientes ({pendientes})</h3>
          <h3>Completadas ({completas})</h3>
        </div>
      )}
      {notes.length > 0 ? (
        notes.map((note) => {
          return (
            <NoteItem
              note={note}
              key={note.id}
              handlerChangeState={handlerChangeState}
              handlerOnDelete={handlerOnDelete}
            />
          );
        })
      ) : (
        <h1>No tiene notas agregadas</h1>
      )}
    </>
  );
};

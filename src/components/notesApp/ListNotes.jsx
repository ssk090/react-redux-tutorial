import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/slices/notesSlice";

function ListNotes() {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  return (
    <div>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h3>Title : {note.title}</h3>
            <p>Desc : {note.desc}</p>
            <button onClick={() => dispatch(deleteNote(note.id))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ListNotes;

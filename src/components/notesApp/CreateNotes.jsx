import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../redux/slices/notesSlice";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      createNote({
        title,
        desc,
        id: nanoid(8),
      })
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Desc"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default CreateNotes;

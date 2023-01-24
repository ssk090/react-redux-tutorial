import React from "react";

import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import "./App.css";
import CreateNotes from "./components/notesApp/CreateNotes";
import ListNotes from "./components/notesApp/ListNotes";

function App() {
  return (
    <>
      <div className="App">
        <h1>Redux</h1>
        {/* <Child1 />
        <Child2 /> */}
        <CreateNotes />
        <ListNotes />
      </div>
    </>
  );
}

export default App;

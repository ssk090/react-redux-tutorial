import React from "react";

import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import "./App.css";
import CreateNotes from "./components/notesApp/CreateNotes";
import ListNotes from "./components/notesApp/ListNotes";
import NavBar from "./components/e-commerce/Navbar/NavBar";
import ProductList from "./components/e-commerce/ProductList/ProductList";

function App() {
  return (
    <>
      {/* <div className="App">
        <h1>Redux</h1>
        <Child1 />
        <Child2 />
        <CreateNotes />
        <ListNotes />
      </div> */}
      <NavBar />
      <ProductList />
    </>
  );
}

export default App;

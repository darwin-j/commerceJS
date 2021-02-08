import React from "react";
import Products from "./components/Products/Products";
import NavBar from "./components/navBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Products />
    </div>
  );
}

export default App;

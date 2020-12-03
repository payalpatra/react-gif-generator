import React from "react";
import './App.css';
import Random from "./componenets/Random";
import Tag from "./componenets/Tag";

function App() {
  return (
    <div className="App">
      <h1>Gif Application</h1>
      <div className="main-container" >
        <Random />
        <Tag />

      </div>
    </div>
  );
}

export default App;

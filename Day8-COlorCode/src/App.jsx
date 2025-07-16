import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ff0000");
  const [name, setName] = useState("");
  function handeleChange(e) {
    setName(e.target.value);
  }
  function handleColor(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div>
        <h1>Color picker</h1>
        <div className="item">
          <input
            style={{ color: color }}
            id="root"
            type="name"
            value={name}
            onChange={handeleChange}
            placeholder="Enter name"
          ></input>
          <br></br>
          <input type="color" value={color} onChange={handleColor} />
          <br />

          <label style={{ color: color, display: "inline" }}>
            priew: {name}
          </label>
        </div>
      </div>
    </>
  );
}

export default App;

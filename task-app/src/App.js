import React, { useState } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

function App() {
  const [currText, setText] = useState({ text: "", id: uniqid() });
  const [currTasklist, setTasklist] = useState([]);

  const handleChange = (event) => {
    setText((prevText) => {
      
      prevText.text = event.target.value;
    });
  };

  const handleTaskInput = (event) => {
    event.preventDefault();
    setTasklist((prevTask) => prevTask.concat(["cool"]));
    setText(() => "");
  };

  return (
    <div className="App">
      <form onSubmit={handleTaskInput}>
        <label htmlFor="inputBox">Enter task</label>
        <input
          type="text"
          id="inputBox"
          onChange={handleChange}
          value={currText.text}
        ></input>
        <button type="submit">submit </button>
      </form>
      <Overview currTask={currTasklist}></Overview>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);
  let [Name, setName] = useState("Try React Hooks");
  
  const addValue = () => {
    if (Counter < 20)
      setCounter(Counter + 1);
      if (Counter === 20) { 
        setName("You have reached the maximum value");
    }
    else {
      setName("Well! you added a number, Keep Trying React Hooks");
    };
  }
  const removeValue = () => {
    if (Counter > 0)
      setCounter(Counter - 1);
      if (Counter === 0) {
        setName("You have reached the minimum value"); }
    else {
      setName("So, you just removed a number, Keep Trying React Hooks");
    };
  }
  const Reset = () => {
    setCounter(0);
    setName("Reset the Counter Value");
  }

  return (
    <>
      <h1>Learn React Hooks</h1>
      <h2>{Name}</h2>
      <h3>Counter Value: {Counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <br />
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default App;
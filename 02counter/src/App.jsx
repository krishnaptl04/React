import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  //usestate is used to create a state variable
  // use state return an  array with two values
  // first value is the current state value
  //second value is a function that allows us to update the state value

  // let counter = 15;

  const addValue = () => {
    if (counter < 20) {
      // console.log("value added", Math.random());
      // console.log("clicked", counter);
      // counter = counter + 1;
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Vite + React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value :{counter}</button>
      <br />

      <button onClick={removeValue}>Remove Value : {counter}</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;

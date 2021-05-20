import React from "react";

import { useStore } from "../store/store";
import "./Counter.css";

const Counter = () => {
  const [state, dispatch] = useStore();
  return (
    <div className="counter">
      <p>Support for multiple state slices.</p>
      <p>Counter: {state.counter}</p>
      <button onClick={() => dispatch("SUB", 1)}>Subtract 1</button>
      <button onClick={() => dispatch("SUB", 5)}>Subtract 5</button>
      <button onClick={() => dispatch("ADD", 5)}>Add 5</button>
      <button onClick={() => dispatch("ADD", 1)}>Add 1</button>
    </div>
  );
};

export default Counter;

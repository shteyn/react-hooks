import React, { useState } from "react";

function HookCounter() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  /*const incrementFive = () => {
    for (let i = 1; i <= 5; i++) {
      setCount(count + i);
      console.log("Count", count);
    }
  };*/

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(i => i + 1);
    }
  };

  console.log("count", count);
  return (
    <div>
      <h2>Hook Component</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Count Increment +</button>
      <button onClick={() => setCount(count != 0 ? count - 1 : initialState)}>
        Count Decrement -
      </button>
      <button onClick={() => setCount(initialState)}> Clear Count</button>
      <button onClick={incrementFive}> increment 5</button>
    </div>
  );
}

export default HookCounter;

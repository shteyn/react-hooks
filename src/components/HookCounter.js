import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hook Component</h2>
      <button onClick={() => setCount(count + 1)}> Count {count}</button>
      <button onClick={() => setCount(0)}> Clear Count</button>
    </div>
  );
}

export default HookCounter;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };
  const Decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <br />
      <br />
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-1</button>
    </div>
  );
}

export default Counter;

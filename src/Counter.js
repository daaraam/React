import React, { useState } from "react";

function Counter() {
  const [count, countSet] = useState(0);

  const onIncrease = () => {
    countSet(count + 1);
  };
  const onDecrease = () => {
    countSet(count - 1);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>{count}</h1>
        <br />
        <br />
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </>
  );
}

export default Counter;

import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const handleInc = () => {
    setcount(count + 1);
  };
  const handleDec = () => {
    setcount(count - 1);
  };
  const handleReset = () => {
    setcount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;

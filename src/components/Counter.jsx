import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;

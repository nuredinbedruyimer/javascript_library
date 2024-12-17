import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
    </div>
  );
};

export default Counter;

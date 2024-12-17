import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h3>{count}</h3>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        Add
      </button>

      <button className="btn" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

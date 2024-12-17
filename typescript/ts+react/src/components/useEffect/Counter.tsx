import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Component Mounted And Counter Added");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount((pre) => pre + 1)}>
        {" "}
        Add Counter
      </button>
    </div>
  );
};

export default Counter;

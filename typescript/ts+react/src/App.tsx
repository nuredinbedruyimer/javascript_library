import "./App.css";

import Counter from "./components/useState/Counter";
import UseStateWithArray from "./components/useState/UseStateWithArray";
import UseStateWithObject from "./components/useState/UseStateWithObject";

function App() {
  return (
    <div>
      <h1>Ts + React</h1>
      {/* <Counter /> */}
      {/* <UseStateWithObject /> */}
      <UseStateWithArray />
    </div>
  );
}

export default App;

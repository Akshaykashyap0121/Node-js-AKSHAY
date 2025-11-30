import { useState } from "react";
import WelcomeMessage from "./WelcomeMessage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WelcomeMessage />
      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;

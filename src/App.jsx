import { useState } from "react";
import Homepage from "./Homepage/Homepage.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;

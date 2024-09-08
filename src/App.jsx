import { useState } from "react";
import Homepage from "./Homepage/Homepage.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-300">
      <Homepage />
    </div>
  );
}

export default App;

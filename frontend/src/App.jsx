import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./check.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1 className='check'>Hello</h1>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

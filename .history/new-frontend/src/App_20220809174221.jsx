import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

// Import pages
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/client/:id" element={<Client />} />
      </Routes>
    </>
  );
}

export default App;

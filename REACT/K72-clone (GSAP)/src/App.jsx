import React from "react";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/agence">Agence</Link>
      <Link to="/projects">Projects</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;

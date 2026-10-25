import React from "react";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { Link, Route, Routes } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(function () {
    gsap.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
  });
  return (
    <div className="text-white ">
      <div className="h-screen w-full flex fixed top-0 z-10 ">
        <div className="stair bg-black h-full w-1/5  "></div>
        <div className="stair bg-black h-full w-1/5  "></div>
        <div className="stair bg-black h-full w-1/5  "></div>
        <div className="stair bg-black h-full w-1/5  "></div>
        <div className="stair bg-black h-full w-1/5  "></div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;

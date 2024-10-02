// src/App.jsx
import React from "react";
import Contact from "./Contact";
import Landing from "./Landing";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import "./sass/_index.scss";
import FerrisWheel from "./FerrisWheel";

export default function App() {
  return (
    <>
      <Nav />
      <FerrisWheel />
      <Landing />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

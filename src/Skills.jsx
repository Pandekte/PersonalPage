// src/Skills.jsx
import React from "react";
import SkillsList from "./SkillsList";
import Heading from "./components/Heading";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <Heading animationDuration="2s">Skills</Heading>
      <SkillsList />
    </section>
  );
}

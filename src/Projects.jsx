// src/Projects.jsx
import React, { useEffect, useRef } from "react";
import Card from "./components/Card";
import Heading from "./components/Heading";
import projects from "./data/projects.yml";

export default function Projects() {
  const projectsList = useRef(null);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      projectsList.current.childNodes.forEach((child) => {
        let rect = child.getBoundingClientRect();
        let x = clientX - rect.x;
        let y = clientY - rect.y;
        child.style.setProperty("--x", `${x}px`);
        child.style.setProperty("--y", `${y}px`);
      });
    };

    const projectsElem = projectsList.current;
    if (window.matchMedia("(min-width: 768px)").matches) {
      projectsElem.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (projectsElem) {
        projectsElem.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="projects" id="projects">
      <Heading animationDuration="6s">Projects</Heading>
      <ul className="projects-list" ref={projectsList}>
        {projects
          .filter((p) => p.description)
          .map((project, i) => (
            <Card key={i} {...project} />
          ))}
      </ul>
    </section>
  );
}

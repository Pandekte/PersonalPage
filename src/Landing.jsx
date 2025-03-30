// src/Landing.jsx
import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
// Import the Sass file for Landing styles
import "./sass/landing.scss";

export default function Landing() {
  return (
    <section className="landing" id="landing">
      <h1>
        <span>Tomasz Marczyński</span>
      </h1>
      <p>
        <span className="waving-hand" role="img" aria-label="waving hand">
          👋
        </span>{" "}
        Hey! I'm Tomasz Marczyński, a web developer.
      </p>
      {/* Animated Arrow Button */}
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="arrow-button"
        aria-label="Scroll to Projects"
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </Link>
    </section>
  );
}

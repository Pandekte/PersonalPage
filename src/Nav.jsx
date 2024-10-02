// src/Nav.jsx
import React, { useState } from "react";
import {
  faCode,
  faEnvelope,
  faFolderOpen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("landing");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav id="mainNav">
      <ul>
        <li className={activeSection === "landing" ? "active" : ""}>
          <Link
            to="landing"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            offset={-70} // Optional: adjust for fixed header height
          >
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </Link>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={handleSetActive}
            offset={-70}
          >
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Portfolio</span>
          </Link>
        </li>
        {/* Add more nav items as needed */}
      </ul>
    </nav>
  );
}

// src/Contact.jsx
import React, { useEffect, useRef } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "./components/Heading";
import contact from "./data/contact.yml";

export default function Contact() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      let rect = buttonRef.current.getBoundingClientRect();
      buttonRef.current.style.setProperty("--x", `${clientX - rect.x}px`);
      buttonRef.current.style.setProperty("--y", `${clientY - rect.y}px`);
    };

    const button = buttonRef.current;
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <Heading>Contact</Heading>
      <div className="container">
        <p className="float-text">{contact.email}</p>
        <div className="socials">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            id="github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <a
          id="resume-dl"
          ref={buttonRef}
          href="assets/Tomasz_Marczynski_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCircleDown} />
          Resume
        </a>
      </div>
    </section>
  );
}

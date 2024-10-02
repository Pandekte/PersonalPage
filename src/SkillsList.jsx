// src/SkillsList.jsx

import React, { useEffect, useRef, useState } from "react";
import Sortable from "sortablejs";
import skillsData from "./data/skills.yml"; // Ensure correct path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAws,
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faLinux,
  faNode,
  faReact,
  faSass,
  faPython,
  faWindows, // Import faWindows from FontAwesome
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  CIcon,
  CppIcon,
  FirebaseIcon,
  FlutterIcon,
  TypeScriptIcon,
  VSCodeIcon,
  ExpressIcon,
  DotNetIcon,
  CSharpIcon,
  DjangoIcon,
} from "./components/CustomIcons";

// Add custom icons to the library
library.add(
  CIcon,
  CppIcon,
  FirebaseIcon,
  FlutterIcon,
  TypeScriptIcon,
  VSCodeIcon,
  ExpressIcon,
  DotNetIcon,
  CSharpIcon,
  DjangoIcon
);

// Create the skillIcons mapping
const skillIcons = {
  JavaScript: faJsSquare,
  TypeScript: ["custom", "typescript"],
  HTML: faHtml5,
  CSS: faCss3Alt,
  SCSS: faSass,
  SQL: faDatabase,
  C: ["custom", "c"],
  "C++": ["custom", "cpp"],
  Java: faJava,
  NodeJS: faNode,
  Express: ["custom", "express"], // Custom icon
  React: faReact,
  "React Native": faReact,
  Flutter: ["custom", "flutter"],
  Git: faGitAlt,
  AWS: faAws,
  Firebase: ["custom", "firebase"],
  Linux: faLinux,
  VSCode: ["custom", "vscode"],
  Python: faPython,
  ".NET": ["custom", "dotnet"], // Custom icon
  "C#": ["custom", "csharp"], // Custom icon
  Django: ["custom", "django"], // Custom icon
  Windows: faWindows, // FontAwesome icon
};

export default function SkillsList() {
  // Flatten the skills data if it's nested
  const initialSkills = Object.values(skillsData).flat();

  // State to manage the order of skills
  const [skills, setSkills] = useState(initialSkills);

  // Reference to the list DOM element
  const skillsListRef = useRef(null);

  // Reference for ARIA live region
  const liveRegionRef = useRef(null);

  useEffect(() => {
    // Initialize SortableJS on the skills list
    const sortable = Sortable.create(skillsListRef.current, {
      animation: 150, // Animation speed in ms
      ghostClass: "sortable-ghost", // Class name for the drop placeholder
      chosenClass: "sortable-chosen", // Class name for the chosen item
      dragClass: "sortable-drag", // Class name for the dragged item
      // Remove the handle option to allow dragging from the entire <li>
      // handle: ".drag-handle",
      onEnd: function (evt) {
        const newSkills = [...skills];
        // Remove the dragged item
        const [movedItem] = newSkills.splice(evt.oldIndex, 1);
        // Insert it at the new position
        newSkills.splice(evt.newIndex, 0, movedItem);
        // Update state
        setSkills(newSkills);
        // Persist the new order (optional)
        saveOrder(newSkills);
        // Announce the change for accessibility
        announce(`${movedItem} moved to position ${evt.newIndex + 1}`);
      },
    });

    // Cleanup function to destroy Sortable instance on unmount
    return () => {
      sortable.destroy();
    };
  }, [skills]);

  // Function to save the new order to localStorage (optional)
  const saveOrder = (orderedSkills) => {
    const order = orderedSkills.map((skill) => skill);
    localStorage.setItem("skillsOrder", JSON.stringify(order));
  };

  // Function to load the order from localStorage (optional)
  const loadOrder = () => {
    const savedOrder = JSON.parse(localStorage.getItem("skillsOrder"));
    if (savedOrder && Array.isArray(savedOrder)) {
      // Ensure that all saved skills exist in the initial skills
      const orderedSkills = savedOrder.filter((skill) =>
        initialSkills.includes(skill)
      );
      // If some skills are missing, append them
      const missingSkills = initialSkills.filter(
        (skill) => !orderedSkills.includes(skill)
      );
      setSkills([...orderedSkills, ...missingSkills]);
    }
  };

  useEffect(() => {
    // Load saved order on component mount
    loadOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle keyboard reordering
  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowUp" && index > 0) {
      e.preventDefault();
      // Move the item up
      const newSkills = [...skills];
      [newSkills[index - 1], newSkills[index]] = [
        newSkills[index],
        newSkills[index - 1],
      ];
      setSkills(newSkills);
      saveOrder(newSkills);
      // Announce the change
      announce(`${skills[index]} moved to position ${index}`);
    } else if (e.key === "ArrowDown" && index < skills.length - 1) {
      e.preventDefault();
      // Move the item down
      const newSkills = [...skills];
      [newSkills[index + 1], newSkills[index]] = [
        newSkills[index],
        newSkills[index + 1],
      ];
      setSkills(newSkills);
      saveOrder(newSkills);
      // Announce the change
      announce(`${skills[index]} moved to position ${index + 2}`);
    }
  };

  // Function to announce changes for screen readers
  const announce = (message) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = message;
    }
  };

  return (
    <div className="container">
      <ul
        className="skills-list"
        ref={skillsListRef}
        aria-label="Skills List"
        role="listbox"
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            data-id={skill}
            role="option"
            aria-grabbed="false"
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {/* Removed the drag handle */}
            {/* Render the appropriate icon */}
            <FontAwesomeIcon icon={skillIcons[skill] || faDatabase} />
            {skill}
          </li>
        ))}
      </ul>
      {/* ARIA Live Region */}
      <div
        ref={liveRegionRef}
        aria-live="assertive"
        aria-atomic="true"
        className="visually-hidden"
      ></div>
    </div>
  );
}

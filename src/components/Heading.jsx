// src/components/Heading.jsx
import React, { useEffect, useRef } from "react";
import opentype from "opentype.js";
import "../sass/heading.scss"; // Ensure this file exists and contains your styles

export default function Heading({ children }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fontPath = "assets/fonts/Roboto-Regular.ttf"; // Adjust the path to your font file

    let observer;

    // Function to initialize the SVG and animations
    const initSvg = (font) => {
      const fontSize = 72;
      const x = 0;
      const y = fontSize;

      const path = font.getPath(children, x, y, fontSize);
      const pathData = path.toPathData(2);

      const bbox = path.getBoundingBox();
      const viewBox = `${bbox.x1} ${bbox.y1} ${bbox.x2 - bbox.x1} ${
        bbox.y2 - bbox.y1
      }`;

      if (svgRef.current) {
        svgRef.current.setAttribute("viewBox", viewBox);
        svgRef.current.innerHTML = `
          <path id="text-path" d="${pathData}" />
        `;

        const pathElement = svgRef.current.querySelector("#text-path");

        if (pathElement) {
          const length = pathElement.getTotalLength();

          // Set initial styles for the animation
          pathElement.style.strokeDasharray = length;
          pathElement.style.strokeDashoffset = length;
          pathElement.style.fill = "transparent";
          pathElement.style.stroke = "#fff";
          pathElement.style.strokeWidth = "1px";

          // Set up the Intersection Observer
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // Start the animation
                  pathElement.style.animation =
                    "borderani 5s forwards, stokeFill 4s 1s forwards";

                  // Once the animation has started, unobserve the element
                  observer.unobserve(containerRef.current);
                }
              });
            },
            {
              threshold: 0.1, // Adjust as needed
            }
          );

          observer.observe(containerRef.current);
        }
      }
    };

    opentype.load(fontPath, (err, font) => {
      if (err) {
        console.error("Font could not be loaded:", err);
      } else {
        initSvg(font);
      }
    });

    // Cleanup the observer on unmount
    return () => {
      if (observer && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [children]);

  return (
    <div className="heading" ref={containerRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

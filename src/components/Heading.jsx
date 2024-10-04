// src/components/Heading.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import opentype from "opentype.js";
import "../sass/heading.scss"; // Ensure this file exists and contains your styles

export default function Heading({ children, animationDuration = "5s" }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fontPath = "assets/fonts/Roboto-Regular.ttf"; // Adjust the path to your font file

    let observer;

    // Function to initialize the SVG and animations
    const initSvg = (font) => {
      const fontSize = 72; // You can adjust this value for uniform size
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

          // Apply dynamic animation durations
          // borderani animation
          pathElement.style.setProperty(
            "--animation-duration-borderani",
            animationDuration
          );
          // strokeFill animation starts after borderani completes
          const borderaniDuration = parseFloat(animationDuration);
          const strokeFillDelay =
            borderaniDuration > 1 ? `${borderaniDuration - 1}s` : "0s";
          pathElement.style.setProperty(
            "--animation-duration-strokeFill",
            borderaniDuration > 1
              ? `${borderaniDuration - 1}s`
              : animationDuration
          );
          pathElement.style.setProperty(
            "--animation-delay-strokeFill",
            strokeFillDelay
          );

          // Define the animation using CSS variables
          pathElement.style.animation = `
            borderani var(--animation-duration-borderani) forwards,
            strokeFill var(--animation-duration-strokeFill) var(--animation-delay-strokeFill) forwards
          `;

          // Ensure animations are paused initially
          pathElement.style.animationPlayState = "paused";

          // Set up the Intersection Observer
          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  // Start the animation
                  pathElement.style.animationPlayState = "running";

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
  }, [children, animationDuration]);

  return (
    <div className="heading" ref={containerRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  animationDuration: PropTypes.string,
};

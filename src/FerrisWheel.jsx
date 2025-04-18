// src/components/FerrisWheel/FerrisWheel.jsx

import React, { useState } from "react";
// Import the central Sass file
import "./sass/_index.scss";

export default function FerrisWheel({ animationDuration = "20s", onHide }) {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    if (onHide) onHide();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  if (!visible) return null;

  return (
    <div
      className="ferriswheel"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex="0"
      aria-label="Close Ferris Wheel"
    >
      <svg
        viewBox="-20 -10 160 140"
        xmlns="http://www.w3.org/2000/svg"
        className="wheel-svg"
      >
        {/* AnimateMotion elements for Seats */}
        <animateMotion
          href="#seat-orange"
          dur={animationDuration}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
        >
          <mpath href="#motionPath" />
        </animateMotion>
        <animateMotion
          href="#seat-green"
          dur={animationDuration}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
        >
          <mpath href="#motionPath-2" />
        </animateMotion>
        <animateMotion
          href="#seat-yellow"
          dur={animationDuration}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
        >
          <mpath href="#motionPath-3" />
        </animateMotion>
        <animateMotion
          href="#seat-white"
          dur={animationDuration}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
        >
          <mpath href="#motionPath-4" />
        </animateMotion>
        <animateMotion
          href="#seat-blue"
          dur={animationDuration}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
        >
          <mpath href="#motionPath-5" />
        </animateMotion>
        <animateMotion
          href="#seat-black"
          dur={animationDuration}
          begin="0s"
          fill="freeze"
          repeatCount="indefinite"
        >
          <mpath href="#motionPath-6" />
        </animateMotion>

        {/* Static Elements */}
        <rect x="-650.4" y="104" fill="#3F6E66" width="1262.3" height="13" />
        <rect
          x="-650.4"
          y="115"
          fill="#FCCA49"
          width="1262.3"
          height="1920.7"
        />

        <polyline
          fill="none"
          stroke="#55B88A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="60,60 77.5,115 85,115 35,115 42.5,115 60,60"
        />

        <g>
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 60 60"
            to="360 60 60"
            dur={animationDuration}
            repeatCount="indefinite"
          />
          <line
            fill="none"
            stroke="#477E76"
            strokeWidth="1"
            strokeMiterlimit="10"
            x1="60"
            y1="10"
            x2="60"
            y2="110"
          />
          <line
            fill="none"
            stroke="#477E76"
            strokeWidth="1"
            strokeMiterlimit="10"
            x1="10"
            y1="60"
            x2="110"
            y2="60"
          />
          <line
            fill="none"
            stroke="#477E76"
            strokeWidth="1"
            strokeMiterlimit="10"
            x1="103.3"
            y1="35"
            x2="16.7"
            y2="85"
          />
          <line
            fill="none"
            stroke="#477E76"
            strokeWidth="1"
            strokeMiterlimit="10"
            x1="35"
            y1="16.7"
            x2="85"
            y2="103.3"
          />
          <line
            fill="none"
            stroke="#477E76"
            strokeWidth="1"
            strokeMiterlimit="10"
            x1="85"
            y1="16.7"
            x2="35"
            y2="103.3"
          />
          <line
            fill="none"
            stroke="#477E76"
            strokeWidth="1"
            strokeMiterlimit="10"
            x1="16.7"
            y1="35"
            x2="103.3"
            y2="85"
          />
          <circle
            fill="none"
            stroke="#052730"
            strokeWidth="3"
            strokeMiterlimit="10"
            cx="60"
            cy="60"
            r="50"
          />
        </g>

        <circle
          fill="#8ED0B2"
          stroke="#052730"
          strokeWidth="3"
          strokeMiterlimit="10"
          cx="60"
          cy="60"
          r="5"
        />

        {/* Motion Paths */}
        <path
          id="motionPath"
          fill="none"
          strokeWidth="0"
          d="M60,10c11.5,0,22.1,3.9,30.5,10.4
             C102.4,29.5,110,43.9,110,60c0,27.6-22.4,50-50,50S10,87.6,10,60S32.4,10,60,10z"
        />
        <path
          id="motionPath-2"
          fill="none"
          strokeWidth="0"
          d="M60,110c-11.5,0-22.1-3.9-30.5-10.4
             C17.6,90.5,10,76.1,10,60c0-27.6,22.4-50,50-50s50,22.4,50,50S87.6,110,60,110z"
        />
        <path
          id="motionPath-3"
          fill="none"
          strokeWidth="0"
          d="M103.3,85c-5.7,10-14.4,17.2-24.3,21.2
             c-13.8,5.7-30.1,5.1-44-2.9C11.1,89.5,2.9,58.9,16.7,35S61.1,2.9,85,16.7S117.1,61.1,103.3,85z"
        />
        <path
          id="motionPath-4"
          fill="none"
          strokeWidth="0"
          d="M103.3,35c5.7,10,7.7,21.1,6.3,31.6
             c-2,14.8-10.6,28.6-24.6,36.7c-23.9,13.8-54.5,5.6-68.3-18.3S11.1,30.5,35,16.7S89.5,11.1,103.3,35z"
        />
        <path
          id="motionPath-5"
          fill="none"
          strokeWidth="0"
          d="M16.7,35C22.4,25,31.1,17.8,41,13.8
             C54.8,8.1,71,8.6,85,16.7c23.9,13.8,32.1,44.4,18.3,68.3S58.9,117.1,35,103.3S2.9,58.9,16.7,35z"
        />
        <path
          id="motionPath-6"
          fill="none"
          strokeWidth="0"
          d="M8.2,76.5c-5.7-10-7.7-21.1-6.3-31.6
             C3.9,30,12.5,16.3,26.5,8.2C50.4-5.6,81,2.6,94.8,26.5s5.6,54.5-18.3,68.3S22,100.4,8.2,76.5z"
        />

        {/* Seat Definitions */}
        <g id="seat-orange">
          <path
            className="seat-top"
            d="M-9-3c0-4.8,3.9-8.7,8.7-8.7S8.5-7.8,8.5-3H-9z"
          />
          <path
            fill="#ED801B"
            d="M17.5,0c0,4.8-3.9,8.7-8.7,8.7S0,4.8,0,0H17.5z"
            transform="translate(-9 -3)"
          />
        </g>
        <g id="seat-green">
          <path
            className="seat-top"
            d="M-9-3c0-4.8,3.9-8.7,8.7-8.7S8.5-7.8,8.5-3H-9z"
          />
          <path
            fill="#2C9D5D"
            d="M17.5,0c0,4.8-3.9,8.7-8.7,8.7S0,4.8,0,0H17.5z"
            transform="translate(-9 -3)"
          />
        </g>
        <g id="seat-yellow">
          <path
            className="seat-top"
            d="M-9-3c0-4.8,3.9-8.7,8.7-8.7S8.5-7.8,8.5-3H-9z"
          />
          <path
            fill="#FEC949"
            d="M17.5,0c0,4.8-3.9,8.7-8.7,8.7S0,4.8,0,0H17.5z"
            transform="translate(-9 -3)"
          />
        </g>
        <g id="seat-white">
          <path
            className="seat-top"
            d="M-9-3c0-4.8,3.9-8.7,8.7-8.7S8.5-7.8,8.5-3H-9z"
          />
          <path
            fill="#FCF4C6"
            d="M17.5,0c0,4.8-3.9,8.7-8.7,8.7S0,4.8,0,0H17.5z"
            transform="translate(-9 -3)"
          />
        </g>
        <g id="seat-blue">
          <path
            className="seat-top"
            d="M-9-3c0-4.8,3.9-8.7,8.7-8.7S8.5-7.8,8.5-3H-9z"
          />
          <path
            fill="#4A9378"
            d="M17.5,0c0,4.8-3.9,8.7-8.7,8.7S0,4.8,0,0H17.5z"
            transform="translate(-9 -3)"
          />
        </g>
        <g id="seat-black" transform="translate(-1 5)">
          <path
            className="seat-top"
            d="M-9-3c0-4.8,3.9-8.7,8.7-8.7S8.5-7.8,8.5-3H-9z"
            transform="translate(9 3)"
          />
          <path
            fill="#224B4B"
            d="M17.5,0c0,4.8-3.9,8.7-8.7,8.7S0,4.8,0,0H17.5z"
          />
        </g>
      </svg>
    </div>
  );
}

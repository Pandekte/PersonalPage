// src/components/Card.jsx
import React from "react";

export default function Card({ title, description, image, url }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className="card"
          style={{
            "--bg-img": `url(${import.meta.env.BASE_URL}${image})`,
          }}
        >
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}

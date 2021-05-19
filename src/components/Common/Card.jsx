import React from "react";

export default function Card(props) {
  return (
    <div className={`grid-wrapper card ${props.className !== undefined ? props.className : ''}`}>
      <div className="grid-12 card-content">{props.children}</div>
    </div>
  );
}

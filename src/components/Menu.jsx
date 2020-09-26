import React from "react";

export default function Menu() {
  return (
    <div className="doc-menu">
      <ul>
        <li className="active" data-id="getting-started">
          Getting Started
        </li>
        <li data-id="grid">Grid</li>
        <li data-id="accordion">Accordion</li>
        <li data-id="alerts">Alerts</li>
        <li data-id="buttons">Buttons</li>
        <li data-id="card">Card</li>
        <li data-id="table">Table</li>
        <li data-id="tabs">Tabs</li>
        <li data-id="typography">Typography</li>
        <li data-id="inputs">Inputs</li>
      </ul>
    </div>
  );
}

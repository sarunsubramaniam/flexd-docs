import React, { useState } from "react";

export default function Menu() {
  const [menuItem, setMenuItem] = useState([
    { name: "Get Started", id: "getting-started" },
    { name: "Grid", id: "grid" },
    { name: "Accordion", id: "accordion" },
    { name: "Alerts", id: "alerts" },
    { name: "Buttons", id: "buttons" },
    { name: "Card", id: "card" },
    { name: "Table", id: "table" },
    { name: "Tabs", id: "tabs" },
    { name: "Typography", id: "typography" },
    { name: "Inputs", id: "inputs" },
  ]);

  return (
    <div className="doc-menu">
      <ul>
        {menuItem.map((item, idx) => {
          return (
            <li
              key={idx}
              className={idx === 0 ? "active" : null}
              data-id={item.id}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

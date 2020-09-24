import React from "react";

export default function Alerts() {
  return (
    <div id="alerts" className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Alerts</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo
            consequuntur alias, debitis voluptatibus repellat corporis. Possimus
            dicta reprehenderit nesciunt nam magni dignissimos.
          </p>
        </div>
      </div>
      <div className="grid-wrapper">
        <div className="grid-12">
          <div className="alert primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="alert success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="alert warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="alert error">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Alerts(props) {
  return (
    <React.Fragment>
      <div className="grid-wrapper">
        <div className="grid-12">
          <h3 className="section-title">Alerts</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo
            consequuntur alias, debitis voluptatibus repellat corporis. Possimus
            dicta reprehenderit nesciunt nam magni dignissimos.
          </p>
        </div>
      </div>
      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <h5>Example</h5>
          <div className="alert primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <i className="fa fa-times"></i>
          </div>
          <div className="alert success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <i className="fa fa-times"></i>
          </div>
          <div className="alert warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <i className="fa fa-times"></i>
          </div>
          <div className="alert error">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <i className="fa fa-times"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

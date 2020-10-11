import React from "react";
import Card from "../../Common/Card";

export default function Alerts(props) {
  return (
    <React.Fragment>
      <Card>
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
      </Card>
    </React.Fragment>
  );
}

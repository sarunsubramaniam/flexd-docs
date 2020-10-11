import React from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";

export default function Inputs(props) {
  const inputSnippet = `<div className="input-fields">
  <div className="input-field">
    <label htmlFor="">First Name</label>
    <input type="text" placeholder="First Name" />
  </div>
  <div className="input-field">
    <label htmlFor="">Last Name</label>
    <input type="text" placeholder="Last Name" />
  </div>
</div>

<div className="input-field">
  <label htmlFor="">Email</label>
  <input type="email" placeholder="Enter your email" />
</div>

<div className="input-field">
  <label htmlFor="">Address</label>
  <input type="text" placeholder="Address" />
</div>

<div className="input-fields">
  <div className="input-field">
    <label htmlFor="">City</label>
    <input type="text" placeholder="City" />
  </div>
  <div className="input-field">
    <label htmlFor="">State/Province/Region</label>
    <input type="password" placeholder="State/Province/Region" />
  </div>
  <div className="input-field">
    <label htmlFor="">Postal Code/Zip</label>
    <input type="text" placeholder="Postal Code/Zip" />
  </div>
  <div className="input-field">
    <label htmlFor="">Country</label>
    <input type="text" placeholder="Country" />
  </div>
</div>`;
  return (
    <React.Fragment>
      <Card className="input-wrapper">
        <h5>Example</h5>
        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input-field">
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-field">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Address" />
        </div>

        <div className="input-fields">
          <div className="input-field">
            <label htmlFor="">City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="input-field">
            <label htmlFor="">State/Province/Region</label>
            <input type="password" placeholder="State/Province/Region" />
          </div>
          <div className="input-field">
            <label htmlFor="">Postal Code/Zip</label>
            <input type="text" placeholder="Postal Code/Zip" />
          </div>
          <div className="input-field">
            <label htmlFor="">Country</label>
            <input type="text" placeholder="Country" />
          </div>
        </div>
      </Card>
      <Card>
        <h5>Implementation</h5>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <figure>
              <Code language="language-html">{inputSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

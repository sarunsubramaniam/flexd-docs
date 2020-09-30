import React from "react";

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
</div>

<div className="input-field">
  <label htmlFor="">Summary</label>
  <textarea name="" id="" cols="30" rows="10"></textarea>
</div>
<div className="button-wrapper justify-flex-end">
  <button className="button solid">Cancel</button>
  <button className="button primary solid">Save</button>
</div>`;
  return (
    <div id="inputs" className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Inputs</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo
            consequuntur alias, debitis voluptatibus repellat corporis. Possimus
            dicta reprehenderit nesciunt nam magni dignissimos.
          </p>
        </div>
      </div>
      <div className="grid-wrapper input-wrapper">
        <div className="grid-12">
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

          <div className="input-field">
            <label htmlFor="">Summary</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="button-wrapper justify-flex-end">
            <button className="button solid">Cancel</button>
            <button className="button primary solid">Save</button>
          </div>
        </div>
      </div>
      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <figcaption>HTML</figcaption>
            <pre className="">
              <code className="language-html">{inputSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

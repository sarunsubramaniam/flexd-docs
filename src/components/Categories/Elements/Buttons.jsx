import React from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";

export default function Buttons(props) {
  const buttonSnippet = `<div class="button-wrapper">
  <button class="button solid">Default</button>
  <button class="button primary">Primary</button>
  <button class="button secondary">Secondary</button>
  <button class="button primary solid">Primary</button>
  <button class="button secondary solid">Secondary</button>
  <button class="button error">Primary</button>
  <button class="button info">Secondary</button>
  <button class="button error solid">Primary</button>
  <button class="button info solid">Secondary</button>
</div>`;
  return (
    <React.Fragment>
      <Card>
        <h5>Example</h5>
        <div className="button-wrapper">
          <button className="button solid">Default</button>
          <button className="button primary">Primary</button>
          <button className="button secondary">Secondary</button>
          <button className="button primary solid">Primary</button>
          <button className="button secondary solid">Secondary</button>
          <button className="button error">Primary</button>
          <button className="button info">Secondary</button>
          <button className="button error solid">Primary</button>
          <button className="button info solid">Secondary</button>
        </div>
      </Card>
      <Card>
        <h5>Implementation</h5>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <figure>
              <Code language="language-html">{buttonSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

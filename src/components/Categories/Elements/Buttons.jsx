import React from "react";

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
      <div className="grid-wrapper">
        <div className="grid-12">
          <h3 className="section-title">Buttons</h3>
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
        </div>
      </div>
      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <h5>Implementation</h5>
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12">
              <figure>
                <pre>
                  <code className="language-html">{buttonSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

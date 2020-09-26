import React from "react";

export default function GetStarted(props) {
  const getStartedSnippet = `<!-- CSS -->
<link rel="stylesheet" type="text/css" href="css/flexmaster.css" />

<!-- Javascript -->
<script src="js/flexmaster.js"></script>`;
  return (
    <div id={props.componentName} className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Getting Started</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ex fugit autem aliquid enim. Quas facilis ad rem ex
            animi sint quasi fugiat tempora aliquid amet fuga omnis, blanditiis
            sequi!
          </p>
        </div>
      </div>
      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <pre className="">
              <code className="language-html">{getStartedSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

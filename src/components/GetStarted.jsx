import React from "react";

export default function GetStarted(props) {
  const getStartedSnippet = `<!-- Flexmaster CSS -->
<link rel="stylesheet" type="text/css" href="css/flexmaster.css" />

<!-- Fontawesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />

<!-- Flexmaster Javascript -->
<script src="js/flexmaster.js"></script>`;
  return (
    <div id="getting-started" className="component-section fm-tab">
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
            <figcaption>HTML</figcaption>
            <pre className="">
              <code className="language-html">{getStartedSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";

export default function QuickStart(props) {
  const cssSnippet = `<!-- Flexd CSS -->
<link rel="stylesheet" type="text/css" href="css/flexd.css" />`;

  const fontAwesomeSnippet = `<!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />`;

  const jsSnippet = `<!-- Flexd Javascript -->
<script src="js/flexd.js"></script>`;

  return (
    <React.Fragment>
      <Card>
        <h4>Include Flexd</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
          blanditiis harum eius temporibus tempora dolore quisquam libero ea
          doloribus reiciendis, laborum suscipit impedit provident
        </p>
      </Card>
      <Card>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <h4>CSS</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              maxime blanditiis harum eius temporibus tempora dolore quisquam
              libero ea doloribus reiciendis, laborum suscipit impedit provident
            </p>
            <figure>
              <Code language="language-html">{cssSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>

      <Card>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <h4>Javascript</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              maxime blanditiis harum eius temporibus tempora dolore quisquam
              libero ea doloribus reiciendis, laborum suscipit impedit provident
            </p>
            <figure>
              <Code language="language-html">{jsSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>

      <Card>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <h4>Font Awesome CDN</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              maxime blanditiis harum eius temporibus tempora dolore quisquam
              libero ea doloribus reiciendis, laborum suscipit impedit provident
            </p>
            <figure>
              <Code language="language-html">{fontAwesomeSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

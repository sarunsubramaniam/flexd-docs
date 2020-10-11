import React from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";

export default function Scaffold(props) {
  const htmlSnippet = `<!DOCTYPE html>
<html lang="en">
  <head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Flexd CSS -->
  <link rel="stylesheet" type="text/css" href="css/flexd.css" />

  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />

  <title>Hello, world!</title>
  </head>

  <body>
    <h1>Hello, world!</h1>

    <!-- Flexd Javascript -->
    <script src="js/flexd.js"></script> 
  </body>
</html>`;

  return (
    <React.Fragment>
      <Card>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <h4>Starter HTML Template</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              maxime blanditiis harum eius temporibus tempora dolore quisquam
              libero ea doloribus reiciendis, laborum suscipit impedit provident
            </p>
            <figure>
              <Code language="language-html">{htmlSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

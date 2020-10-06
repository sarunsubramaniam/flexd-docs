import React from "react";

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
      <h3 className="section-title">Scaffold</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis maxime
        blanditiis harum eius temporibus tempora dolore quisquam libero ea
        doloribus reiciendis, laborum suscipit impedit provident asperiores cum
        quidem minus laboriosam vel totam nesciunt, aliquam dolor. Asperiores
        possimus aut consequatur quaerat maxime, culpa perferendis eveniet. At,
        debitis soluta quas a consequatur aperiam provident non laboriosam
        praesentium accusamus placeat veritatis minima fugit in! Non harum
        incidunt similique deserunt a quibusdam consequuntur impedit, natus
        ipsum, fugiat reprehenderit dolores repellendus sequi voluptatem
        laudantium provident. consectetur!
      </p>

      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12">
              <h4>Starter HTML Template</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                maxime blanditiis harum eius temporibus tempora dolore quisquam
                libero ea doloribus reiciendis, laborum suscipit impedit
                provident
              </p>
              <figure>
                <pre>
                  <code className="language-html">{htmlSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

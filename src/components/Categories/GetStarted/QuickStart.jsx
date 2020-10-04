import React from "react";

export default function QuickStart(props) {
  const cssSnippet = `<!-- Flexd CSS -->
<link rel="stylesheet" type="text/css" href="css/flexmaster.css" />`;

  const fontAwesomeSnippet = `<!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />`;

  const jsSnippet = `<!-- Flexd Javascript -->
<script src="js/flexmaster.js"></script>`;

  return (
    <React.Fragment>
      <h3 className="section-title">Quick Start</h3>
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
          <h4>Include Flexd</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            maxime blanditiis harum eius temporibus tempora dolore quisquam
            libero ea doloribus reiciendis, laborum suscipit impedit provident
          </p>
        </div>
      </div>

      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12">
              <h4>CSS</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                maxime blanditiis harum eius temporibus tempora dolore quisquam
                libero ea doloribus reiciendis, laborum suscipit impedit
                provident
              </p>
              <figure>
                <pre>
                  <code className="language-html">{cssSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12">
              <h4>Javascript</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                maxime blanditiis harum eius temporibus tempora dolore quisquam
                libero ea doloribus reiciendis, laborum suscipit impedit
                provident
              </p>
              <figure>
                <pre>
                  <code className="language-html">{jsSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12">
              <h4>Font Awesome CDN</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                maxime blanditiis harum eius temporibus tempora dolore quisquam
                libero ea doloribus reiciendis, laborum suscipit impedit
                provident
              </p>
              <figure>
                <pre>
                  <code className="language-html">{fontAwesomeSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

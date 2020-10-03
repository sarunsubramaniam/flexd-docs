import React from "react";

export default function QuickStart(props) {
  const getStartedSnippet = `<!-- Flexmaster CSS -->
<link rel="stylesheet" type="text/css" href="css/flexmaster.css" />

<!-- Fontawesome CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />

<!-- Flexmaster Javascript -->
<script src="js/flexmaster.js"></script>`;

  return (
    <React.Fragment>
      <h3 className="section-title blue">Quick Start</h3>
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
              <figure>
                <pre>
                  <code className="language-html">{getStartedSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

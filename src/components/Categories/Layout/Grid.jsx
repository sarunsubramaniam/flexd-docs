import React from "react";

export default function Grid(props) {
  const gridSnippet = `<div class="grid-sm-3">
  <p>grid-3</p>
</div>
<div class="grid-sm-3">
  <p>grid-3</p>
</div>
<div class="grid-sm-3">
  <p>grid-3</p>
</div>
<div class="grid-sm-3">
  <p>grid-3</p>
</div>`;
  return (
    <React.Fragment>
      <div className="grid-wrapper">
        <div className="grid-12">
          <h3 className="section-title blue">Grid</h3>
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
          <div className="grid-wrapper grid-example">
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
            <div className="grid-12 grid-sm-1 inline-flex justify-center">
              <p>1</p>
            </div>
          </div>
          <div className="grid-wrapper grid-example">
            <div className="grid-12 grid-sm-2 inline-flex justify-center">
              <p>2</p>
            </div>
            <div className="grid-12 grid-sm-2 inline-flex justify-center">
              <p>2</p>
            </div>
            <div className="grid-12 grid-sm-2 inline-flex justify-center">
              <p>2</p>
            </div>
            <div className="grid-12 grid-sm-2 inline-flex justify-center">
              <p>2</p>
            </div>
            <div className="grid-12 grid-sm-2 inline-flex justify-center">
              <p>2</p>
            </div>
            <div className="grid-12 grid-sm-2 inline-flex justify-center">
              <p>2</p>
            </div>
          </div>
          <div className="grid-wrapper grid-example">
            <div className="grid-12 grid-sm-3 inline-flex justify-center">
              <p>3</p>
            </div>
            <div className="grid-12 grid-sm-3 inline-flex justify-center">
              <p>3</p>
            </div>
            <div className="grid-12 grid-sm-3 inline-flex justify-center">
              <p>3</p>
            </div>
            <div className="grid-12 grid-sm-3 inline-flex justify-center">
              <p>3</p>
            </div>
          </div>
          <div className="grid-wrapper grid-example code-example">
            <div className="grid-12 grid-sm-4 inline-flex justify-center">
              <p>4</p>
            </div>
            <div className="grid-12 grid-sm-4 inline-flex justify-center">
              <p>4</p>
            </div>
            <div className="grid-12 grid-sm-4 inline-flex justify-center">
              <p>4</p>
            </div>
          </div>
          <div className="grid-wrapper grid-example">
            <div className="grid-12 grid-sm-6 inline-flex justify-center">
              <p>6</p>
            </div>
            <div className="grid-12 grid-sm-6 inline-flex justify-center">
              <p>6</p>
            </div>
          </div>
          <div className="grid-wrapper grid-example">
            <div className="grid-12 inline-flex justify-center">
              <p>12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <h5>Implementation</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            <code className="language-html">grid-sm-12</code>
            ipsam quos non, odio labore, ratione aliquam molestias, vero dolore
            molestiae nobis quisquam obcaecati. Rerum incidunt pariatur enim
            unde alias?
          </p>
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12"></div>
            <div className="grid-12">
              <figure>
                <pre>
                  <code className="language-html">{gridSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

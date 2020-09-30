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
    <div id="grid" className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Grid</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo
            consequuntur alias, debitis voluptatibus repellat corporis. Possimus
            dicta reprehenderit nesciunt nam magni dignissimos.
          </p>
        </div>
      </div>

      <div className="grid-wrapper grid-example">
        <div className="grid-12 inline-flex justify-center">
          <p>grid-12</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example">
        <div className="grid-12 grid-sm-6 inline-flex justify-center">
          <p>grid-6</p>
        </div>
        <div className="grid-12 grid-sm-6 inline-flex justify-center">
          <p>grid-6</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example">
        <div className="grid-12 grid-sm-7 inline-flex justify-center">
          <p>grid-7</p>
        </div>
        <div className="grid-12 grid-sm-5 inline-flex justify-center">
          <p>grid-5</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example">
        <div className="grid-12 grid-sm-8 inline-flex justify-center">
          <p>grid-8</p>
        </div>
        <div className="grid-12 grid-sm-4 inline-flex justify-center">
          <p>grid-4</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example">
        <div className="grid-12 grid-sm-9 inline-flex justify-center">
          <p>grid-9</p>
        </div>
        <div className="grid-12 grid-sm-3 inline-flex justify-center">
          <p>grid-3</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example">
        <div className="grid-12 grid-sm-10 inline-flex justify-center">
          <p>grid-10</p>
        </div>
        <div className="grid-12 grid-sm-2 inline-flex justify-center">
          <p>grid-2</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example code-example">
        <div className="grid-12 grid-sm-4 inline-flex justify-center">
          <p>grid-4</p>
        </div>
        <div className="grid-12 grid-sm-4 inline-flex justify-center">
          <p>grid-4</p>
        </div>
        <div className="grid-12 grid-sm-4 inline-flex justify-center">
          <p>grid-4</p>
        </div>
      </div>
      <div className="grid-wrapper grid-example">
        <div className="grid-12 grid-sm-3 inline-flex justify-center">
          <p>grid-3</p>
        </div>
        <div className="grid-12 grid-sm-3 inline-flex justify-center">
          <p>grid-3</p>
        </div>
        <div className="grid-12 grid-sm-3 inline-flex justify-center">
          <p>grid-3</p>
        </div>
        <div className="grid-12 grid-sm-3 inline-flex justify-center">
          <p>grid-3</p>
        </div>
      </div>

      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <figcaption>HTML</figcaption>
            <pre className="">
              <code className="language-html">{gridSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

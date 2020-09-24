import React from "react";
import placeholderImage from "../images/docs/1280x960.png";

export default function Card() {
  const cardSnippet = `<div class="card">
<div class="card-image">
  <img src={placeholderImage} alt={altText} />
</div>
<div class="card-content">
  <h4>Title</h4>
  <p>
    Lorem ipsum dolor sit amet consectetur,
    adipisicing elit. Magni nisi facere ducimus.
  </p>
  <div class="button-wrapper">
    <button class="button primary fluid">
      Primary
    </button>
    <button class="button secondary fluid">
      Secondary
    </button>
  </div>
</div>
</div>`;
  return (
    <div id="card" className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Cards</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            eligendi voluptates dolor odio fuga beatae quod non hic cupiditate
            dolorem? Reiciendis deleniti cupiditate vero itaque odio eveniet
            repellendus ducimus sequi!
          </p>
        </div>
      </div>

      <div className="grid-wrapper">
        <div className="grid-12 grid-sm-6 grid-md-4">
          <div className="card">
            <div className="card-image">
              <img src={placeholderImage} alt="" />
            </div>
            <div className="card-content">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                nisi facere ducimus.
              </p>
              <div className="button-wrapper">
                <button className="button primary fluid">Primary</button>
                <button className="button secondary fluid">Secondary</button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-12 grid-sm-6 grid-md-4">
          <div className="card">
            <div className="card-image">
              <img src={placeholderImage} alt="" />
            </div>
            <div className="card-content">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                nisi facere ducimus.
              </p>
              <div className="button-wrapper">
                <button className="button primary solid fluid">Primary</button>
                <button className="button secondary solid fluid">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-12 grid-sm-6 grid-md-4">
          <div className="card">
            <div className="card-image">
              <img src={placeholderImage} alt="" />
            </div>
            <div className="card-content">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                nisi facere ducimus.
              </p>
              <div className="button-wrapper">
                <button className="button info solid fluid">Info</button>
                <button className="button error solid fluid">Error</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <pre className="">
              <code className="language-html">{cardSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

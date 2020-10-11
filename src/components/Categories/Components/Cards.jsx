import React from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";
import placeholderImage from "../../../images/docs/1280x960.png";

export default function Cards(props) {
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
    <React.Fragment>
      <Card>
        <h5>Example</h5>
        <div className="grid-wrapper">
          <div className="grid-12 grid-sm-6 grid-md-4">
            <div className="card">
              <div className="card-image">
                <img src={placeholderImage} alt="" />
              </div>
              <div className="card-content">
                <h4>Title</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni nisi facere ducimus.
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni nisi facere ducimus.
                </p>
                <div className="button-wrapper">
                  <button className="button primary solid fluid">
                    Primary
                  </button>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni nisi facere ducimus.
                </p>
                <div className="button-wrapper">
                  <button className="button info solid fluid">Info</button>
                  <button className="button error solid fluid">Error</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <h5>Implementation</h5>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <figure>
              <Code language="language-html">{cardSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

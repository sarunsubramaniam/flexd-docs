import React, { useEffect } from "react";
import $ from "../js/flexmaster";

export default function Tabs(props) {
  useEffect(() => {
    let tabOne = document.getElementById("tab-name");
    $(tabOne).tabs();
  });
  const tabHTMLSnippet = `<div id="myTab" className="tabs">
  <div className="tab-header">
    <ul>
      <li>Tab 1</li>
      <li>Tab 2</li>
      <li>Tab 3</li>
    </ul>
  </div>
  <div className="tab-content">
    <div className="tab-child">
      Tab 1 ipsum dolor sit amet consectetur,
      adipisicing elit. Quibusdam sunt blanditiis
      natus ad, porro facere totam voluptate dolores
      optio explicabo, excepturi quisquam odio quos
      nihil molestias reprehenderit rerum corporis
      mollitia.
    </div>
    <div className="tab-child">
      Tab 2 ipsum dolor sit amet consectetur,
      adipisicing elit. Quibusdam sunt blanditiis
      natus ad, porro facere totam voluptate dolores
      optio explicabo, excepturi quisquam odio quos
      nihil molestias reprehenderit rerum corporis
      mollitia.
    </div>
    <div className="tab-child">
      Tab 3 ipsum dolor sit amet consectetur,
      adipisicing elit. Quibusdam sunt blanditiis
      natus ad, porro facere totam voluptate dolores
      optio explicabo, excepturi quisquam odio quos
      nihil molestias reprehenderit rerum corporis
      mollitia.
    </div>
  </div>
</div>`;
  const tabJSSnippet = `let myTab = document.getElementById("myTab");
$(myTab).tabs();`;
  return (
    <div id={props.componentName} className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Tabs</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            repudiandae, odio obcaecati maxime, laudantium earum culpa explicabo
            consequuntur alias, debitis voluptatibus repellat corporis. Possimus
            dicta reprehenderit nesciunt nam magni dignissimos.
          </p>
        </div>
      </div>

      <div className="grid-wrapper">
        <div className="grid-12">
          <div id="tab-name" className="tabs">
            <div className="tab-header">
              <ul>
                <li>Tab 1</li>
                <li>Tab 2</li>
                <li>Tab 3</li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-child">
                Tab 1 ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam sunt blanditiis natus ad, porro facere totam voluptate
                dolores optio explicabo, excepturi quisquam odio quos nihil
                molestias reprehenderit rerum corporis mollitia. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Magni nesciunt
                odit corrupti ducimus temporibus, perferendis dicta, tenetur
                tempora laudantium fuga a laboriosam aut! Perspiciatis nihil
                laudantium natus optio, ea quam!
              </div>
              <div className="tab-child">
                ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
                sunt blanditiis natus ad, porro facere totam voluptate dolores
                optio explicabo, excepturi quisquam odio quos nihil molestias
                reprehenderit rerum corporis mollitia.
              </div>
              <div className="tab-child">
                Tab 3 ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam sunt blanditiis natus ad, porro facere totam voluptate
                dolores optio explicabo, excepturi quisquam odio quos nihil
                molestias reprehenderit rerum corporis mollitia. excepturi
                quisquam odio quos nihil molestias reprehenderit rerum corporis
                mollitia.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <figcaption>HTML</figcaption>
            <pre className="">
              <code className="language-html">{tabHTMLSnippet}</code>
            </pre>
            <figcaption>Javascript</figcaption>
            <pre className="">
              <code className="language-js">{tabJSSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import $ from "../../../js/flexd";

export default function Accordion(props) {
  useEffect(() => {
    let accOne = document.getElementById("collapsible");
    $(accOne).accordion();
  });
  const accordionHTMLSnippet = `<div id="myAccordion" className="accordion">
  <ul>
    <li>
      <div className="accordion-head">Accordion 1</div>
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ab unde doloribus similique
        aspernatur eos culpa voluptatum vel nisi
        molestias quae temporibus modi officia dolore
        at aperiam, perferendis id itaque quasi.
      </div>
    </li>
    <li>
      <div className="accordion-head">Accordion 2</div>
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Libero, asperiores suscipit
        placeat atque deleniti quod, voluptatibus a
        voluptas at incidunt repudiandae, soluta illo
        et amet praesentium? Dicta maiores repudiandae
        similique.
      </div>
    </li>
    <li>
      <div className="accordion-head">Accordion 3</div>
      <div className="accordion-body">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Assumenda aspernatur
        sapiente quae ea quaerat, dolores nemo sunt
        aut rem tempore possimus quam eligendi tenetur
        adipisci molestias facilis officiis sit
        recusandae.
      </div>
    </li>
  </ul>
</div>`;
  const accordionJSSnippet = `let myAccordion = document.getElementById("myAccordion");
$(myAccordion).accordion();`;
  return (
    <React.Fragment>
      <div className="grid-wrapper">
        <div className="grid-12">
          <h3 className="section-title">Accordion</h3>
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
          <div id="collapsible" className="accordion">
            <ul>
              <li>
                <div className="accordion-head">
                  Accordion 1<i className="fa fa-angle-down"></i>
                </div>
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  unde doloribus similique aspernatur eos culpa voluptatum vel
                  nisi molestias quae temporibus modi officia dolore at aperiam,
                  perferendis id itaque quasi.
                </div>
              </li>
              <li>
                <div className="accordion-head">
                  Accordion 2<i className="fa fa-angle-down"></i>
                </div>
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero, asperiores suscipit placeat atque deleniti quod,
                  voluptatibus a voluptas at incidunt repudiandae, soluta illo
                  et amet praesentium? Dicta maiores repudiandae similique.
                </div>
              </li>
              <li>
                <div className="accordion-head">
                  Accordion 3<i className="fa fa-angle-down"></i>
                </div>
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda aspernatur sapiente quae ea quaerat, dolores nemo
                  sunt aut rem tempore possimus quam eligendi tenetur adipisci
                  molestias facilis officiis sit recusandae.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid-wrapper card">
        <div className="grid-12 card-content">
          <h5>Implementation</h5>
          <div className="grid-wrapper code-wrapper">
            <div className="grid-12">
              <figure>
                <pre>
                  <code className="language-html">{accordionHTMLSnippet}</code>
                </pre>
                <pre>
                  <code className="language-js">{accordionJSSnippet}</code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
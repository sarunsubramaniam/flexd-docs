import React from "react";
import Card from "../../Common/Card";

export default function Flex() {
  return (
    <React.Fragment>
      <Card>
        <h5>Flex Container</h5>
        <div className="grid-wrapper">
          <div className="grid-4 flex-column">
            <h6>display</h6>
            <div className="flex-card">
              <div className="flex-container ex-flex">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">display: flex</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-inline-flex">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">display: inline-flex</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>flex-direction</h6>
            <div className="flex-card">
              <div className="flex-container ex-row">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">flex-direction: row</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-row-reverse">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">flex-direction: row-reverse</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-column">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">flex-direction: column</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-column-reverse">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">
                flex-direction: column-reverse
              </div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>flex-wrap</h6>
            <div className="flex-card">
              <div className="flex-container ex-nowrap">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">flex-wrap: nowrap</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-wrap">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">flex-wrap: wrap</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-wrap-reverse">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">flex-wrap: wrap-reverse</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>justify-content</h6>
            <div className="flex-card">
              <div className="flex-container ex-flex-start">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">justify-content: flex-start</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-flex-end">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">justify-content: flex-end</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-center">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">justify-content: center</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-space-between">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">
                justify-content: space-between
              </div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-space-around">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">justify-content: space-around</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-space-evenly">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">justify-content: space-evenly</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>align-items</h6>
            <div className="flex-card">
              <div className="flex-container ex-align-flex-start">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">align-items: flex-start</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-align-flex-end">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">align-items: flex-end</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-align-center">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">align-items: center</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-align-baseline">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">align-items: baseline</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-align-stretch">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">align-items: stretch</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>align-content</h6>
            <div className="flex-card">
              <div className="flex-container ex-alignc-flex-start">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">align-content: flex-start</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-alignc-flex-end">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">align-content: flex-end</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-alignc-center">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">align-content: center</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-alignc-space-between">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">align-content: space-between</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-alignc-space-around">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">align-content: space-around</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-alignc-stretch">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
                <div className="flex-item six"></div>
              </div>
              <div className="flex-property">align-content: stretch</div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <h5>Flex Item</h5>
        <div className="grid-wrapper">
          <div className="grid-4 flex-column">
            <h6>flex-grow</h6>
            <div className="flex-card">
              <div className="flex-container ex-grow-1">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">flex-grow: 1</div>
            </div>
            <div className="flex-card">
              <div className="flex-container ex-grow-2">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
              </div>
              <div className="flex-property">flex-grow: (1, 2, and 3)</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>flex-basis</h6>
            <div className="flex-card">
              <div className="flex-container ex-basis">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
              </div>
              <div className="flex-property">flex-basis: 60% and 40%</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>flex-shrink</h6>
            <div className="flex-card">
              <div className="flex-container ex-shrink">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
              </div>
              <div className="flex-property">flex-shrink: 2</div>
            </div>
          </div>
          <div className="grid-4 flex-column">
            <h6>align-self</h6>
            <div className="flex-card">
              <div className="flex-container ex-self">
                <div className="flex-item one"></div>
                <div className="flex-item two"></div>
                <div className="flex-item three"></div>
                <div className="flex-item four"></div>
                <div className="flex-item five"></div>
              </div>
              <div className="flex-property">align-self: flex-end</div>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

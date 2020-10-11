import React from "react";
import Card from "../../Common/Card";
import Code from "../../Common/Code";

export default function Table(props) {
  const tableSnippet = `<table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Age</th>
      <th>Designation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Arun</td>
      <td>C210, Lakewood, West Alamada Avenue</td>
      <td>29</td>
      <td>UI Developer</td>
    </tr>
    <tr>
      <td>Sugan</td>
      <td>1245, North Boulder, Alpine Avenue</td>
      <td>28</td>
      <td>Data Scientist</td>
    </tr>
    <tr>
      <td>Mohan</td>
      <td>I201, Louisville, West Dillion Road</td>
      <td>27</td>
      <td>Android Developer</td>
    </tr>
    <tr>
      <td>Niranjan</td>
      <td>
        7234, Colorado Springs, North Academy Blvd
      </td>
      <td>28</td>
      <td>iOS Developer</td>
    </tr>
  </tbody>
</table>`;
  return (
    <React.Fragment>
      <Card>
        <h5>Example</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arun</td>
              <td>C210, Lakewood, West Alamada Avenue</td>
              <td>29</td>
              <td>UI Developer</td>
            </tr>
            <tr>
              <td>Sugan</td>
              <td>1245, North Boulder, Alpine Avenue</td>
              <td>28</td>
              <td>Data Scientist</td>
            </tr>
            <tr>
              <td>Mohan</td>
              <td>I201, Louisville, West Dillion Road</td>
              <td>27</td>
              <td>Android Developer</td>
            </tr>
            <tr>
              <td>Niranjan</td>
              <td>7234, Colorado Springs, North Academy Blvd</td>
              <td>28</td>
              <td>iOS Developer</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card>
        <h5>Implementation</h5>
        <div className="grid-wrapper code-wrapper">
          <div className="grid-12">
            <figure>
              <Code language="language-html">{tableSnippet}</Code>
            </figure>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

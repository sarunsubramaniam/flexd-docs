import React from "react";

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
    <div id="table" className="component-section fm-tab">
      <div className="grid-wrapper">
        <div className="grid-12">
          <h4>Table</h4>
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
        </div>
      </div>

      <div className="grid-wrapper code-wrapper">
        <div className="grid-12">
          <figure>
            <figcaption>HTML</figcaption>
            <pre className="">
              <code className="language-html">{tableSnippet}</code>
            </pre>
          </figure>
        </div>
      </div>
    </div>
  );
}

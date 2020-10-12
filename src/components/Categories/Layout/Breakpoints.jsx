import React from "react";
import Card from "../../Common/Card";

export default function Breakpoints() {
  return (
    <Card>
      <table className="table">
        <thead>
          <tr>
            <th>breakpoints</th>
            <th>suffix</th>
            <th>description</th>
            <th>equivalent to</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>480px</td>
            <td>sdf</td>
            <td>sdfs</td>
            <td>sdfs</td>
          </tr>
          <tr>
            <td>768px</td>
            <td>sdf</td>
            <td>sdfs</td>
            <td>sdfs</td>
          </tr>
          <tr>
            <td>992px</td>
            <td>sdf</td>
            <td>sdfs</td>
            <td>sdfs</td>
          </tr>
          <tr>
            <td>1200px</td>
            <td>sdf</td>
            <td>sdfs</td>
            <td>sdfs</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}

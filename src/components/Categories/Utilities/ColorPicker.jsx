import React from 'react';
import Card from "../../Common/Card";

export default function ColorPicker() {

  const getColor = (e) => {
    console.log(e.currentTarget.style.backgroundColor);
  }
  
  return (
    <Card className="color-picker-wrapper">
      {Array.apply(0, Array(33)).map(function (x, i) {
        return <span onClick={getColor} className="color-grid" style={{ cursor: 'pointer', backgroundColor: `rgb(${i * 8}, ${i * 8}, ${i * 8})` }}>{i}</span>;
      })}
    </Card>
  )
}

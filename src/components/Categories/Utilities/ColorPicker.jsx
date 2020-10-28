import React, {useRef} from 'react';
import Card from "../../Common/Card";

export default function ColorPicker() {
  const inputEl = useRef(null);
  const getColor = (e) => {
    let colorCode  = e.currentTarget.style.backgroundColor;
    console.log(colorCode);
    inputEl.current.setAttribute('value', colorCode);
    inputEl.current.select();
    inputEl.current.setSelectionRange(0, 99999); 
    document.execCommand("copy");
  }
  
  return (
    <Card className="color-picker-wrapper">
      <input ref={inputEl} type="text"  />
      {Array.apply(0, Array(33)).map(function (x, i) {
        return <div onClick={getColor} className="color-grid" style={{ cursor: 'pointer', backgroundColor: `rgb(${i * 8}, ${i * 8}, ${i * 8})` }}></div>;
      })}
    </Card>
  )
}

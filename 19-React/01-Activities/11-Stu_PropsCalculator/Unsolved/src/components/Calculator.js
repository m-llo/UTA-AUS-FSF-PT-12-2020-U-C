import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

function Math(props) {
  console.log(props);
let value;
  switch ( prop.operator ) {
    case "+":
      value = props.num1 + props.num2;
      break;



    default: 
    value = NaN;  

  }

  return <span>{value}</span>
}

function Calculator() {
  return (
    <div>
      <p>19 + 341 = ?</p>
      <p>42 - 17 = ?</p>
      <p>100 * 3 = ?</p>
      <p>96 / 4 = ?</p>
    </div>
  );
}

export default Calculator;

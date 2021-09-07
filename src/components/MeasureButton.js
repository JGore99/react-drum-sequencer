import React from "react";

const MeasureButton = (props) => {
  //const { measure, i } = props.measure;

  return (
    <button
      key={props.i}
      value={props.measure}
      onClick={(e) => console.log(props.measure)}
    ></button>
  );
};

export default MeasureButton;

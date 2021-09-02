import React from "react";

const MeasureButton = (props) => {
  //const { measureRow } = props.measureRow;

  return (
    <button
      key={props.measure}
      value={props.measure}
      onClick={(e) => console.log(props.measure)}
    ></button>
  );
};

export default MeasureButton;

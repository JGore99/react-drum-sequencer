import React from "react";

const MeasureButton = (props) => {
  //const { measure } = props.measure;

  return (
    <button
      //key={props.measure}
      //value={props.measure}
      onClick={(e) => console.log(props.measure)}
    ></button>
  );
};

export default MeasureButton;

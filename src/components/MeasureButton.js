import React from "react";

const MeasureButton = (props) => {
  //const { measure } = props.sound; not sure why this isn't working
  return (
    <button
      key={props.measure}
      value={props.measure}
      onClick={(e) => console.log(e.target.value)}
    >
      {props.measure}
    </button>
  );
};

export default MeasureButton;

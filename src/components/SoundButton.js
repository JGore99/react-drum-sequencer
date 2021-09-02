import React from "react";

const SoundButton = (props) => {
  //const { sound } = props.sound; not sure why this isn't working
  return (
    <button
      key={props.sound}
      value={props.sound}
      onClick={(e) => console.log(e.target.value)}
    >
      {props.sound}
    </button>
  );
};

export default SoundButton;

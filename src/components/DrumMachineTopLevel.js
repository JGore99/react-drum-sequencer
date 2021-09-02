import React from "react";
import MeasureButton from "./MeasureButton";
import SoundButton from "./SoundButton";

export default class DrumMachineTopLevel extends React.Component {
  state = {
    loading: true,
    sounds: [
      "kick",
      "snare",
      "openHat",
      "closedHat",
      "rim",
      "clap",
      "frog",
      "kitty",
      "horn",
    ],

    measureGrid: [
      {
        kick01: false,
        kick02: false,
        kick03: false,
        kick04: false,
        kick05: false,
        kick06: false,
        kick07: false,
        kick08: false,
        kick09: false,
        kick10: false,
        kick11: false,
        kick12: false,
        kick13: false,
        kick14: false,
        kick15: false,
        kick16: false,
      },
      {
        snare01: false,
        snare02: false,
        snare03: false,
        snare04: false,
        snare05: false,
        snare06: false,
        snare07: false,
        snare08: false,
        snare09: false,
        snare10: false,
        snare11: false,
        snare12: false,
        snare13: false,
        snare14: false,
        snare15: false,
        snare16: false,
      },
      {
        openHat01: false,
        openHat02: false,
        openHat03: false,
        openHat04: false,
        openHat05: false,
        openHat06: false,
        openHat07: false,
        openHat08: false,
        openHat09: false,
        openHat10: false,
        openHat11: false,
        openHat12: false,
        openHat13: false,
        openHat14: false,
        openHat15: false,
        openHat16: false,
      },
    ],
  };

  render() {
    return (
      <div className="body">
        <div className="sequencer-body">
          <div className="control-row"></div>
          <div className="sound-row">
            {this.state.sounds.map((sound) => (
              <SoundButton sound={sound} />
            ))}
          </div>
          <div className="measure">
            {this.state.measureGrid.map((measure) => (
              <MeasureButton measure={measure} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

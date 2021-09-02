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
      { row: { "01": false, "02": false, "03": false } },
      { row: { "01": false, "02": false, "03": false } },
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
          <div className="measureRow">
            {this.state.measureGrid.map((row) =>
              row.map((measure) => <MeasureButton measure={measure} />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import Osc1 from "./components/Osc1";
import "./App.scss";

let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

function App() {
  const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value);
  const changeOscIFreq = (e) => {
    let { value } = e.target;
    setOsc1Freq(value);
    osc1.frequency.value = value;
  };

  return (
    <div className="App">
      <h1>sliders</h1>
      <button onClick={() => osc1.start()}>start</button>
      <button onClick={() => osc1.stop()}>stop</button>
      <Osc1 changeFreq={changeOscIFreq} freq={osc1Freq} />
    </div>
  );
}

export default App;

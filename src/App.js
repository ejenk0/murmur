import "./App.css";
import React from "react";
import volumeicon from "./volume-toggle.png";
import waves from "./audio/waves.wav";
import fire from "./audio/fire.wav";
import rain from "./audio/rain.wav";
import birds from "./audio/birds.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurn,
  faFeather,
  faTint,
  faWater,
} from "@fortawesome/free-solid-svg-icons";

class SoundSlot extends React.Component {
  render() {
    return (
      <div className="App-sound-slot">
        <FontAwesomeIcon icon={this.props.icon} className="App-sound-icon" />
        <h3>{this.props.text}</h3>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          className="App-volume-slider"
        />
      </div>
    );
  }
}

var global_volume = 50;
const audio_players = {
  Fire: new Audio(fire),
  Waves: new Audio(waves),
  Rain: new Audio(rain),
  Birds: new Audio(birds),
};
for (var key in audio_players) {
  var value = audio_players[key];
  value.autoplay = 1;
  value.loop = 1;
  value.volume = 0;
  value.play();
}

window.onload = function () {
  const sound_sliders = document.getElementsByClassName("App-volume-slider");
  function handleSoundVolume() {
    this.previousSibling.previousSibling.style.opacity =
      (this.value / 100) * 0.8 + 0.2;
    audio_players[this.previousSibling.textContent].volume =
      (global_volume / 100) * (this.value / 100);
  }
  document.getElementById("volume").oninput = function handleGlobalVolume() {
    global_volume = this.value;
    for (i = 1; i < sound_sliders.length; i++) {
      audio_players[sound_sliders[i].previousSibling.textContent].volume =
        (global_volume / 100) * (sound_sliders[i].value / 100);
    }
  };
  var i;
  for (i = 1; i < sound_sliders.length; i++) {
    sound_sliders[i].oninput = handleSoundVolume;
  }
};

function handleMasterMute() {
  if (global_volume === "0") {
    document.getElementById("volume").value = 50;
  } else {
    document.getElementById("volume").value = 0;
  }
  document.getElementById("volume").oninput();
}

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400"
        rel="stylesheet"
      />
      <header className="App-header">
        <input
          type="range"
          id="volume"
          min="0"
          max="100"
          defaultValue="50"
          className="App-volume-slider"
        />
        <button
          className="App-mute-button"
          id="master-mute"
          onClick={handleMasterMute}
        >
          <img src={volumeicon} className="App-header-icon" alt="volume_icon" />
        </button>
      </header>
      <div className="App-body">
        <h1>MURMUR</h1>
        <h2>Wash away distractions with ambient sound</h2>
        <div className="App-sounds-drawer">
          <SoundSlot icon={faBurn} text="Fire" />
          <SoundSlot icon={faWater} text="Waves" />
          <SoundSlot icon={faTint} text="Rain" />
          <SoundSlot icon={faFeather} text="Birds" />
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import volumeicon from "./volume-toggle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faWater } from "@fortawesome/free-solid-svg-icons";

// NOTE, need to use getElementsByClassName() instead of Id!!!

var global_volume = 50;

window.onload = function () {
  document.getElementById("volume").oninput = function handleGlobalVolume() {
    global_volume = this.value;
  };
  document.getElementById(
    "sound-volume"
  ).oninput = function handleSoundVolume() {
    this.previousSibling.previousSibling.style.opacity =
      (this.value / 100) * 0.8 + 0.2;
  };
};

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
        <button className="App-mute-button">
          <img src={volumeicon} className="App-header-icon" />
        </button>
      </header>
      <div className="App-body">
        <h1>MURMUR</h1>
        <h2>Wash away distractions with ambient sound</h2>
        <div className="App-sounds">
          <div className="App-sound-slot">
            <FontAwesomeIcon icon={faBurn} className="App-sound-icon" />
            <h3>Fire</h3>
            <input
              type="range"
              id="sound-volume"
              min="0"
              max="100"
              defaultValue="50"
              className="App-volume-slider"
            />
          </div>
          <div className="App-sound-slot">
            <FontAwesomeIcon icon={faWater} className="App-sound-icon" />
            <h3>Waves</h3>
            <input
              type="range"
              id="sound-volume"
              min="0"
              max="100"
              defaultValue="50"
              className="App-volume-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

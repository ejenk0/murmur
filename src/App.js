import "./App.css";
import volumeicon from "./volume-toggle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurn, faWater } from "@fortawesome/free-solid-svg-icons";

const sound_slot = (icon, text) => (
  <div className="App-sound-slot">
    <FontAwesomeIcon icon={icon} className="App-sound-icon" />
    <h3>{text}</h3>
    <input
      type="range"
      min="0"
      max="100"
      defaultValue="0"
      className="App-volume-slider"
    />
  </div>
);

// NOTE, need to use getElementsByClassName() instead of Id!!!

// var global_volume = 50;

window.onload = function () {
  document.getElementById("volume").oninput = function handleGlobalVolume() {
    // global_volume = this.value;
  };
  const sound_sliders = document.getElementsByClassName("App-volume-slider");
  var i;
  for (i = 0; i < sound_sliders.length; i++) {
    sound_sliders[i].oninput = function handleSoundVolume() {
      this.previousSibling.previousSibling.style.opacity =
        (this.value / 100) * 0.8 + 0.2;
    };
  }
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
          <img src={volumeicon} className="App-header-icon" alt="volume_icon" />
        </button>
      </header>
      <div className="App-body">
        <h1>MURMUR</h1>
        <h2>Wash away distractions with ambient sound</h2>
        <div className="App-sounds">
          {sound_slot(faBurn, "Fire")}
          {sound_slot(faWater, "Waves")}
        </div>
      </div>
    </div>
  );
}

export default App;

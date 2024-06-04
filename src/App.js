import "./App.css";

import Icon, { baseSettings } from "./components/Icon.js";
import {
  faAddressCard,
  faCog,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const inner = {
  ...baseSettings,
  size: { defaultSize: "1x", hoverScale: 1.1 },
  color: { defaultColor: "pink", hoverColor: "red" },
  animation: {
    name: "bounce",
    alwaysAnimated: true,
    duration: 1,
    cursor: "pointer",
    stackPosition: "1x",
    "land-scale-x": "1.9",
    "land-scale-y": "1.9",
    height: "-0.5rem",
  },
};

const outer = {
  ...baseSettings,
  size: { defaultSize: "1x", hoverScale: 1.1 },
  color: { defaultColor: "palevioletred", hoverColor: "palevioletred" },
  animation: {
    name: "beat-fade",
    alwaysAnimated: true,
    duration: 1,
    cursor: "pointer",
    stackPosition: "2x",
    opacity: "0.7",
    scale: "1.1",
  },
};

function App() {
  return (
    <div className="App">
      <span className="fa-stack fa-2x Icon">
        <Icon icon={faHeart} settings={outer} className="OuterIcon" />
        <Icon icon={faHeart} settings={inner} className="Icon" />
      </span>
    </div>
  );
}

export default App;

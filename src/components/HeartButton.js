import Icon, { baseSettings } from "./Icon.js";

import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const inner = {
  ...baseSettings,
  size: { defaultSize: "1x" },
  color: {
    defaultColor: "rgba(231, 154, 167, 0.2)",
    hoverColor: "rgba(231, 154, 167, 0.8)",
  },
  transition: { transDuration: 1, transEase: "ease-in-out" },
  animation: {
    name: "bounce",
    alwaysAnimated: true,
    duration: 1.5,
    stackPosition: "1x",
    "land-scale-x": "2.2",
    "land-scale-y": "2.2",
    height: "-0.2rem",
    cursor: "pointer",
  },
};

const outer = {
  ...baseSettings,
  size: { defaultSize: "1x", hoverScale: 1.1 },
  color: { defaultColor: "palevioletred", hoverColor: "palevioletred" },
  animation: {
    name: "beat",
    alwaysAnimated: true,
    duration: 1.5,
    stackPosition: "2x",
    opacity: "0.8",
    scale: "1.1",
  },
};

export default function HeartButton({ onClick }) {
  return (
    <span className="fa-stack fa-2x HeartButton">
      <Icon
        icon={faHeart}
        settings={outer}
        className="OuterIcon"
        onClick={onClick}
      />
      <Icon
        icon={faHeart}
        settings={inner}
        className="InnerIcon"
        onClick={onClick}
      />
    </span>
  );
}

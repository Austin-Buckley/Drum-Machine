import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { styled } from "@mui/material/styles";

const Icon = styled(FontAwesomeIcon)(
  ({
    color,
    hoverColor,
    size,
    isHovered,
    duration,
    hoverScale,
    className,
  }) => ({
    fontSize: size ? size : "1x",
    class: className,
    transition: "all 0.3 ease-in-out",
    color: isHovered ? hoverColor : color ? color : "white",
    hoverColor: isHovered ? hoverColor : color,
    transform: isHovered ? `scale(${hoverScale})` : "scale(1)",
    "--fa-animation-duration": duration + "s",
  })
);

function BounceIcon(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => setIsHovered(!isHovered);

  return (
    <Icon
      icon={props.icon}
      isHovered={isHovered}
      className={props.class}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      size={props.size ? props.size : "1x"}
      color={props.color}
      hoverColor={props.hoverColor}
      duration={props.duration ? props.duration : 1}
      hoverScale={props.hoverScale ? props.hoverScale : 1}
      sx={props.style}
      bounce={
        props.animated
          ? props.animated
          : props.animateOnHover
          ? isHovered
          : isHovered
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <BounceIcon
        class="BounceIcon"
        icon={faMusic}
        color={"red"}
        hoverColor={"slategrey"}
        duration={3}
        animateOnHover
      />
    </div>
  );
}

export default App;

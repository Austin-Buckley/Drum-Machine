import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";

const handleHover = (setIsHovered) => () => setIsHovered((prev) => !prev);

const IconWrapper = styled((props) => {
  const { icon, className, settings, onClick, transform } = props;
  const [isHovered, setIsHovered] = useState(false);

  const { size, color, animation, transition } = settings;
  const { defaultSize, hoverScale } = size;
  const { defaultColor, hoverColor } = color;
  const { transDuration, transEase } = transition;
  const {
    name,
    delay,
    cursor,
    timing,
    duration,
    direction,
    iterations,
    stackZIndex,
    stackPosition,
    animateOnHover,
    alwaysAnimated,
    ...animationProps
  } = animation;

  const animationClass =
    animateOnHover && isHovered
      ? `fa-${name}`
      : alwaysAnimated
      ? `fa-${name}`
      : "";

  const stackedClass = stackPosition ? `fa-stack-${stackPosition}` : "";

  const style = {
    transition: `scale ${transDuration}s ${transEase}, transform ${transDuration}s ${transEase}, color ${transDuration}s ${transEase}`,
    color: isHovered ? hoverColor : defaultColor || "white",
    transform: isHovered ? `scale(${hoverScale})` : "scale(1)",
    cursor: isHovered ? cursor : "default",
    "--fa-animation-duration": `${duration}s`,
    "--fa-animation-iteration-count": iterations,
    "--fa-animation-delay": delay,
    "--fa-animation-direction": direction,
    "animation-timing-function": timing,
    "--fa-stack-z-index": stackZIndex,
  };

  Object.keys(animationProps).forEach((key) => {
    style[`--fa-${name}-${key}`] = animationProps[key];
  });

  return (
    <FontAwesomeIcon
      icon={icon}
      className={`${className} ${animationClass} ${stackedClass} fa-${defaultSize}`}
      style={style}
      transform={{ ...transform }}
      onMouseEnter={handleHover(setIsHovered)}
      onMouseLeave={handleHover(setIsHovered)}
      onClick={onClick}
    />
  );
})``;

export default IconWrapper;
import IconWrapper from "./IconWrapper";

export const baseSettings = {
  color: { defaultColor: "white", hoverColor: "slategrey" },
  size: { defaultSize: "1x", hoverScale: 1.1 },
  transition: { transDuration: 1, transEase: "ease-in-out" },
  animation: {
    name: "beat-fade",
    duration: 1,
    timing: "ease-in-out",
    cursor: "pointer",
    alwaysAnimated: true,
    iterations: "infinite",
    scale: "1.025",
    opacity: "0.7",
  },
};

function Icon({ icon, className, settings, transform, ...props }) {
  return (
    <IconWrapper
      icon={icon}
      className={className + ""}
      settings={settings ? {...baseSettings, ...settings } : {...baseSettings}}
      transform={{ ...transform }}
      {...props}
    />
  );
}

export default Icon;
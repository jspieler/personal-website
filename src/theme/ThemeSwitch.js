import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import { animated, useSpring } from "@react-spring/web";
import "./themeswitch.css";

const properties = {
  dark: {
    r: 7.2,
    transform: "rotate(45deg)",
    cx: 9.6,
    cy: 3.2,
    opacity: 0,
  },
  light: {
    r: 4,
    transform: "rotate(90deg)",
    cx: 24,
    cy: 0,
    opacity: 1,
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { r, transform, cx, cy, opacity } =
    properties[theme === "dark-theme" ? "light" : "dark"];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps = useSpring({ r, config: properties.springConfig });
  const maskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.2"
      height="19.2"
      viewBox="0 0 19.2 19.2"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={theme === "dark-theme" ? "animated-dark" : "animated-light"}
      onClick={() => toggleTheme()}
      style={{
        cursor: "pointer",
        ...svgContainerProps,
      }}
    >
      <mask id="mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle style={maskedCircleProps} r="7.2" fill="black" />
      </mask>

      <animated.circle
        cx="9.6"
        cy="9.6"
        style={centerCircleProps}
        className={theme === "dark-theme" ? "animated-dark" : "animated-light"}
        mask="url(#mask)"
      />
      <animated.g stroke="currentColor" style={linesProps}>
        <line x1="9.6" y1="0.8" x2="9.6" y2="2.4" />
        <line x1="9.6" y1="16.8" x2="9.6" y2="18.4" />
        <line x1="3.376" y1="3.376" x2="4.512" y2="4.512" />
        <line x1="14.688" y1="14.688" x2="15.824" y2="15.824" />
        <line x1="0.8" y1="9.6" x2="2.4" y2="9.6" />
        <line x1="16.8" y1="9.6" x2="18.4" y2="9.6" />
        <line x1="3.376" y1="15.824" x2="4.512" y2="14.688" />
        <line x1="14.688" y1="4.512" x2="15.824" y2="3.376" />
      </animated.g>
    </animated.svg>
  );
};

export default ThemeSwitch;

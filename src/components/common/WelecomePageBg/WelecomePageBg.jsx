import React from "react";
import style from "./WelecomePageBg.module.css";
import Fade from "react-reveal/Fade";

const WelecomePageBg = ({ margin, children, padding, isDarkMode }) => {
  return (
    <Fade>
      <div
        className={`shadow  ${style.main} ${
          isDarkMode ? style.dark : style.light
        }`}
        style={{ margin: margin, padding: padding }}
      >
        {children}
      </div>
    </Fade>
  );
};

export default WelecomePageBg;

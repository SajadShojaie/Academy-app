import React from "react";
import style from "./TitleFirstLine.module.css";

const TitleFirstLine = ({ text, marginTop, width ,isDarkMode }) => {
  return (
    <div
      className={`mx-auto shadow ${style.title} ${
  isDarkMode ? style.title_dark : style.title_light
}`}
      style={{ marginTop: `${marginTop}`, width: `${width} ` }}
    >
      <div className={`fw-bold text-center fs-4 fw-bold `}
      style={{ color: isDarkMode ? "#fff" : "#000" }}>
      {text}
      </div>
    </div>
  );
};

export default TitleFirstLine;

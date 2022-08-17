import React from "react";
import style from "./MoreBtnSmall.module.css";

const MoreBtnSmall = ({ text, fontsize, margin, smallshow, isDarkMode }) => {
  return (
    <div
      className={`${style.btn}`}
      style={{
        fontSize: smallshow ? fontsize : "12px",
        margin: margin,
        color: isDarkMode ? "#fff" : "#a216cc",
        background: isDarkMode ? "#a216cc" : "#fff",
      }}
    >
      {text}
    </div>
  );
};

export default MoreBtnSmall;

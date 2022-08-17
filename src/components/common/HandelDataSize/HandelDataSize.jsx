import React from "react";
import style from "./HandelDataSize.module.css";

const HandelDataSize = ({
  pageSize,
  handelPageSize,
  color,
  background,
  number1,
  number2,
  number3,
  isDarkMode
}) => {
  return (
    <select
      className={`border-0 shadow ${style.bg_content} `}
      style={{color: isDarkMode ? "#fff" : "#000" , background: isDarkMode ? "#3f4a6b" : "#fff" }}

      defaultValue={pageSize}
      onChange={(value) => handelPageSize(value)}
    >
      <option value={number1}>{number1}</option>
      <option value={number2}>{number2}</option>
      <option value={number3}>{number3}</option>
    </select>
  );
};

export default HandelDataSize;

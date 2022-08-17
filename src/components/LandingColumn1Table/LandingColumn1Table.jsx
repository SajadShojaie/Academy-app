import React from "react";
import style from "./LandingColumn1Table.module.css";

const LandingColumn1Table = ({ text, imgNumber, color, diffrentWidth }) => {
  return (
    <div
      className={`d-flex justify-content-around align-items-center shadow-lg ${style.table_cover}`}
      style={{ backgroundColor: `${color}` }}
    >
      <div>{text}</div>
      <img
        style={{ width: `${diffrentWidth}` }}
        className={`d-block ${style.img_fix}`}
        src={require(`../../assets/image/Landing/column1/${imgNumber}.png`)}
        alt=''
      />
    </div>
  );
};

export default LandingColumn1Table;

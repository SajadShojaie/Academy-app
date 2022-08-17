import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingColumn5Table.module.css";

const LandingColumn5Table = ({ text, img, isDarkMode, data }) => {
  return (
    <div
      className={`fw-bold mt-3 ${style.holder_content} ${
        isDarkMode ? style.holder_content_dark : style.holder_content_light
      }`}
    >
      <Link to={{ pathname: `/BlogsDetails/${data._id}`, state: data }}>
        <img
          className={`${style.cover_img}`}
          src={require(`../../assets/image/Landing/column5/${img}`)}
          alt=''
        />
      </Link>

      <p className={`${style.content_col}`}>{text}</p>
    </div>
  );
};

export default LandingColumn5Table;

import React from "react";
import {Link} from "react-router-dom";
import style from "./MoreBtn.module.css";

const MoreBtn = ({ BtnText, diffrentWidth ,isDarkMode }) => {
  return (
    <Link
      to='/'
      className={`${style.btn}`}
      style={{ width: `${diffrentWidth}` ,    
      color: isDarkMode ? "#fff" : "#a216cc",
      background: isDarkMode ? "#a216cc" : "#fff",}}
    >
    

      {BtnText}
    </Link>
  );
};

export default MoreBtn;

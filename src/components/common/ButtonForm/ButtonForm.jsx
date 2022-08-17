import React from "react";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import style from "./ButtonForm.module.css";

const ButtonForm = ({ ButtonText, url }) => {
  return (
    <Fade>
      <Link to={url}>
        <button className={`${style.ButtonForm}`}>{ButtonText}</button>
      </Link>
    </Fade>
  );
};

export default ButtonForm;

import React from "react";
import Fade from "react-reveal/Fade";
import ContactForm from "../common/ContactForm/ContactForm";
import style from "./LandingColumn6.module.css";

const LandingColumn6 = ({ isDarkMode }) => {
  return (
    <div className={`mt-5 ${style.cover}`}>
      <Fade>
        <div className={`${style.left_col}`}></div>
      </Fade>

      <div className={`d-flex align-items-center ${style.right_col}`}>
        <ContactForm isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default LandingColumn6;

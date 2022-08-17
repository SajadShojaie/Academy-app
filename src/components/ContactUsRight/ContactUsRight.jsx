import React from "react";
import style from "./ContactUsRight.module.css";
import Fade from "react-reveal/Fade";

const ContactUsRight = ({ img_class, firstText, secondText }) => {
  return (
    <Fade bottom>
      <div
        className={`d-flex align-items-center justify-content-around 
        w-50 mx-auto mt-5 ${style.cover}`}
      >
        <i className={`bi ${img_class} fs-4 ${style.color}`}></i>
        <div>
          <p className={`m-0 ${style.big_des}`}>{firstText}</p>
          <p className={`m-0 ${style.small_des}`}>{secondText}</p>
        </div>
      </div>
    </Fade>
  );
};

export default ContactUsRight;

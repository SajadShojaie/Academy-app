import React from "react";
import style from "../../ButtonComponent/Button.module.css";

const Button = ({ btnText }) => {
  return (
    <button
      type='submit'
      className={`btn text-light mt-4 mx-auto d-block ${style.send_btn}`}
    >
      {btnText}
    </button>
  );
};

export default Button;

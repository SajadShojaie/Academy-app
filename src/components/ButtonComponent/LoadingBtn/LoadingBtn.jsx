import React from "react";
import style from "../../ButtonComponent/Button.module.css";

const LoadingBtn = ({ btnText }) => {
  return (
    <button
      className={`btn mt-4 mx-auto d-block ${style.send_btn}`}
      type='button'
      disabled
    >
      <div className='d-flex justify-content-center align-items-center'>
        <span
          className='spinner-border text-light spinner-border-sm '
          role='status'
          aria-hidden='true'
        ></span>
        <span className='mx-3 text-light'>{btnText}</span>
      </div>
    </button>
  );
};

export default LoadingBtn;

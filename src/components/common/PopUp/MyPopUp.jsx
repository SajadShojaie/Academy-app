import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import style from "./MyPopUp.module.css";

const MyPopUp = ({ mytrigger, text, action }) => (
  // btn
  <Popup trigger={mytrigger} modal>
    {/* content */}
    {(close) => (
      <div className={`d-flex flex-column text-center ${style.popup_content}`}>
        <div>
          <i
            className={`bi bi-exclamation-circle-fill text-warning ${style.icon}`}
          ></i>
        </div>
        <p className='fs-4 fw-bold'>{text}</p>
        <div className='d-flex justify-content-evenly align-items-center py-3'>
          <button type='button' className='btn btn-danger w-25' onClick={close}>
            {action}
          </button>

          <button
            type='button'
            className='btn btn-success w-25'
            onClick={close}
          >
            بیخیال
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export default MyPopUp;

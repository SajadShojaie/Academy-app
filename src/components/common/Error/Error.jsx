import React from "react";
import "../../../index.css";

const Error = () => {
  const handelRefresh = () => {
    window.location.reload();
  };
  return (
    <div className='text-center' style={{ fontFamily: "sansarif" }}>
      <img
        style={{ width: "65%" }}
        src={require("../../../assets/image/not-found/error_boundary.png")}
        alt='error_boundary'
      />

      <p className={`text-warning fs-4`}>
        !!!یه مشکلی پیش اومده دوباره امتحانش کن
      </p>

      <button
        type='button'
        className='btn btn-success w-25 mt-3'
        onClick={handelRefresh}
      >
        تلاش مجدد
      </button>
    </div>
  );
};

export default Error;

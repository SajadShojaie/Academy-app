import React from "react";
import style from "./NotFound.module.css";
import MoreBtn from "../../components/common/MoreBtn/MoreBtn";

const NotFound = () => {
  return (
    <div className={`container ${style.cover}`}>
      <img
        src={require("../../assets/image/not-found/not-found.png")}
        alt=''
        className={`d-block mx-auto ${style.img_res}`}
      />
      <p className='fw-bold fs-3 mt-3 text-center'>
        !!!صفحه ی مورد نظر شما پیدا نشده
      </p>
      <MoreBtn BtnText='برگشت به صفحه ی اصلی' diffrentWidth='290px' />
    </div>
  );
};

export default NotFound;

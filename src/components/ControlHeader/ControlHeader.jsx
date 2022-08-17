import React from "react";
import HandelDataSize from "../common/HandelDataSize/HandelDataSize";
import style from "./ControlHeader.module.css";

const ControlHeader = ({
  handelchangerLeft,
  handelchangerRight,
  handelPageSize,
  pageSize,
  kindtext,
  smallshow,
  isDarkMode
}) => {
  return (
    <div
      className='container d-flex justify-content-between align-items-center'
      style={{ minWidth: "600px" }}
    >
      <div className={`${style.bg_content}`}
      style={{ background: isDarkMode ? "none" : "#fff" }}
      >
        <HandelDataSize
          pageSize={pageSize}
          handelPageSize={handelPageSize}
          number1='4'
          number2='8'
          number3='12'
          isDarkMode={isDarkMode}
        />
      </div>
      {/* <div
        style={{ direction: "rtl" }}
        className={`shadow d-flex justify-content-between align-items-center ${style.bg_content}`}
      >
        <span>{kindtext}</span>
        <span>اخبار</span>
        <span>مقالات</span>
        <span>برترین اخبار</span>
        <span>سایر</span>
      </div> */}
      <div
        className={`shadow d-flex justify-content-around align-items-center ${style.bg_content}`} style={{ padding: "4px 21px 0"  ,background: isDarkMode ? "#3f4a6b" : "#fff" }}
        >
        <i
          onClick={handelchangerLeft}
          className='bi bi-list-ul'
          style={{
            fontSize: "30px",
            marginRight: "9px",
            color: smallshow ? "#000" : "#a817ff",
          }}
        ></i>

        <i
          onClick={handelchangerRight}
          className='bi bi-grid-3x3-gap-fill'
          style={{ fontSize: "30px", color: smallshow ? "#a817ff" : "#000" }}
        ></i>
      </div>
    </div>
  );
};

export default ControlHeader;

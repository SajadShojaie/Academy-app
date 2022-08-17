import React from "react";
import { Link } from "react-router-dom";
import MoreBtnSmall from "../../components/common/MoreBtnSmall/MoreBtnSmall";
import style from "./BlogCol.module.css";
import Fade from "react-reveal/Fade";
import Like from "../common/Like/Like";

const BlogCol = ({
  data,
  image,
  title,
  des,
  tag,
  bigShowData,
  folder,
  detailPage,
  smallshow,
  isDarkMode,
}) => {
  return (
    <Fade>
      <div
        style={{ background: isDarkMode ? "#242835" : "#fff" }}
        className={`shadow mt-4 ${style.bg} ${
          smallshow ? style.small : style.big
        }`}
      >
        <img
          src={require(`../../assets/image/${folder}/${image}`)}
          alt=''
          className={`${style.main_img} ${smallshow ? "mx-auto " : ""}`}
        />
        <div style={{ width: smallshow ? "" : "65%" }}>
          <p
            className='fw-bold fs-6 mx-auto m-3'
            style={{ width: "80%", color: isDarkMode ? "#fff" : "#000" }}
          >
            {title}
          </p>
          <p
            className='mx-auto '
            style={{
              width: "80%",
              fontSize: "12px",
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            {smallshow ? `${des.slice(0, 25)}...` : des}
          </p>

          <div style={{ display: smallshow ? "none" : "block" }}>
            <div
              className='d-flex justify-content-around align-items-center mt-3 mx-auto'
              style={{ fontSize: "13px", width: "86%" }}
            >
              <span className='border rounded p-1'>
                <span
                  className='fw-bold'
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                >
                  {bigShowData.right}
                  {" : "}
                </span>
                <span style={{ color: isDarkMode ? "#edecec" : "#000" }}>
                  {data.category || data.cost}
                </span>
              </span>

              <span className='border rounded p-1'>
                <span
                  className='fw-bold'
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                >
                  {bigShowData.middle}{" "}
                </span>
                <span style={{ color: isDarkMode ? "#edecec" : "#000" }}>
                  {"22-10-1400" || data.startDate.slice(0, 10)}
                </span>
              </span>

              <span className='border rounded p-1'>
                <span
                  className='fw-bold'
                  style={{ color: isDarkMode ? "#fff" : "#000" }}
                >
                  {bigShowData.left}{" "}
                </span>
                <span style={{ color: isDarkMode ? "#edecec" : "#000" }}>
                  {data.endDate ? data.endDate.slice(0, 10) : ": برنامه نویسی"}
                </span>
              </span>

              {bigShowData.last && (
                <span className='border rounded p-1'>
                  <span
                    className='fw-bold'
                    style={{ color: isDarkMode ? "#fff" : "#000" }}
                  >
                    {bigShowData.last}{" "}
                  </span>
                  <span style={{ color: isDarkMode ? "#edecec" : "#000" }}>
                    {data.teacher.fullName}
                  </span>
                </span>
              )}
            </div>
          </div>

          <div className='d-flex justify-content-around align-items-center mt-3'>
            <Like thisIconData={data} isDarkMode={isDarkMode} />

            <Link
              to={{
                pathname: `/${detailPage}/${data._id}`,
                state: data,
              }}
            >
              <MoreBtnSmall
                text='ادامه مطلب'
                fontsize='10px'
                margin='0'
                smallshow={smallshow}
                isDarkMode={isDarkMode}
              />
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default BlogCol;

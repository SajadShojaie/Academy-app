import React from "react";
import Fade from "react-reveal/Fade";
import { DarkcontextConsumer } from "../../core/utils/context/Darkcontext";
import style from "./LandingColumn4.module.css";

const LandingColumn4 = () => {
  const datas = [
    { title: "حامد نظری", des: "طراح فرانت اند", img: "02", id: 1 },
    { title: "حامد نظری", des: "طراح فرانت اند", img: "03", id: 2 },
    { title: "حامد نظری", des: "طراح فرانت اند", img: "04", id: 3 },
  ];
  return (
    <DarkcontextConsumer>
      {(isDarkMode) => {
        return (
          <div className={`container-fluid mt-5 ${style.back_bg}`}>
            <div className={` ${style.cover}`}>
              <Fade>
                <div
                  className={`shadow d-flex justify-content-around align-items-center 
                  ${style.top_content}
                  ${
                    isDarkMode
                      ? style.top_content_dark
                      : style.top_content_light
                  }`}
                  style={{ width: "45%" }}
                >
                  <img
                    className={`${style.img_pos}`}
                    src={require("../../assets/image/Landing/column4/01.jpg")}
                    alt=''
                  />
                  <div
                    className={`px-4
                 ${isDarkMode ? style.color_dark : style.color_light}`}
                  >
                    <p className='m-0 fw-bold fs-4'>دکتر بحر العلوم</p>
                    <p className='m-0 mt-1 text-muted '>مدیریت</p>
                    <p
                      className={`m-0 mt-1 text-muted ${style.textdes_res}`}
                      style={{ fontSize: "12px" }}
                    >
                      مدرس در آموزشگاه , مدرس در دانشگاه علم و فناوری مازندران
                      مستقر در بهشهر , مدرس دوره های وب
                    </p>
                  </div>
                </div>
              </Fade>

              <div className={` mt-5 mx-auto ${style.bottom_holder}`}>
                {datas.map((data) => (
                  <Fade key={data.id}>
                    <div
                      className={`shadow  d-flex justify-content-around align-items-center  
                      ${style.top_content}
                      ${
                        isDarkMode
                          ? style.top_content_dark
                          : style.top_content_light
                      }`}
                    >
                      <img
                        className={`${style.img_pos}`}
                        style={{ width: "37%" }}
                        src={require(`../../assets/image/Landing/column4/${data.img}.jpg`)}
                        alt=''
                      />
                      <div
                        className={` ${
                          isDarkMode ? style.color_dark : style.color_light
                        }`}
                      >
                        <p className='m-0 fw-bold fs-6'>{data.title}</p>
                        <p
                          className='m-0 mt-1 text-muted '
                          style={{ fontSize: "13px" }}
                        >
                          {data.des}
                        </p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </DarkcontextConsumer>
  );
};

export default LandingColumn4;

import React from "react";
import LandingColumn1Table from "../LandingColumn1Table/LandingColumn1Table";
import style from "./LandingColumn1.module.css";

//animation
import Fade from "react-reveal/Fade";

const LandingColumn1 = () => {
  return (
    <div className={`mt-5 ${style.big_bg}`}>
      <div className={`${style.holder_main}`}>
        <div className={`${style.row}`}>
          <Fade top>
            <div className={` ${style.service_res}`}>
              <LandingColumn1Table
                text="امتحان"
                imgNumber="01"
                color="#E74C3C"
              />
            </div>
          </Fade>
          <Fade top>
            <div className={` ${style.service_res}`}>
              <LandingColumn1Table
                text="مدرک معتبر"
                imgNumber="02"
                color="#F1C40F"
              />
            </div>
          </Fade>
        </div>
        <div className={`${style.row}`}>
          <Fade bottom>
            {" "}
            <div className={` ${style.service_res}`}>
              <LandingColumn1Table
                text="مشاوره"
                imgNumber="03"
                color="#9B59B6"
                diffrentWidth="59px"
              />
            </div>{" "}
          </Fade>
          <Fade bottom>
            <div className={` ${style.service_res}`}>
              <LandingColumn1Table
                text="فرصت های شغلی"
                imgNumber="04"
                color="#3498DB"
                diffrentWidth="62px"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default LandingColumn1;

import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import style from "./IntroLanding.module.css";
import Typed from "react-typed";
import { DarkcontextConsumer } from "../../core/utils/context/Darkcontext";
const IntroLanding = () => {
  return (
    <DarkcontextConsumer>
      {(isDarkMode) => {
        return (
          <div className={` ${style.left_bg}`}>
            <div className={`text-end  ${style.fram_bg}`}>
              <Fade top>
                <h1
                  className={`
                ${style.title}
                ${isDarkMode ? style.title_dark : style.title_light}
                `}
                >
                  پژوهشگاه سپهر
                </h1>
              </Fade>
              <Fade>
                <div
                  className={`
                ${style.description}
                ${isDarkMode ? style.description_dark : style.description_light}

                `}
                >
                  <Typed
                    strings={[
                      "پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت اموزشی و همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با راه کار های نوین و استفاده از پتانسیل فضای مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند",
                    ]}
                    typeSpeed={30}
                  />
                </div>
              </Fade>
              <Slide top>
                <div className={`${style.btn_res}`}>
                  <Link
                    to='/courses'
                    className={`btn text-white  ${style.btn_dif}`}
                  >
                    شروع یادگیری
                  </Link>
                </div>{" "}
              </Slide>
            </div>
          </div>
        );
      }}
    </DarkcontextConsumer>
  );
};

export default IntroLanding;

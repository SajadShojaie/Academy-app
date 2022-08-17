import React from "react";
import style from "./Title.module.css";
import { DarkcontextConsumer } from "../../core/utils/context/Darkcontext";

const Title = ({ firstDescription, secondDescription, marginTop }) => {
  return (
    <DarkcontextConsumer>
      {(isDarkMode) => {
        return (
          <div
            className={`mx-auto shadow 
      ${style.title}
      ${isDarkMode ? style.title_dark : style.title_light}
         `}
            style={{ marginTop: `${marginTop}` }}
          >
            <div className='fw-bold text-center fs-4 fw-bold'>
              {firstDescription}
            </div>
            <div className='mt-2 text-center fs-6 fw-light'>
              {secondDescription}
            </div>
          </div>
        );
      }}
    </DarkcontextConsumer>
  );
};

export default Title;

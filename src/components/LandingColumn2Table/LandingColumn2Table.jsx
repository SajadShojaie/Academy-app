import React from "react";
import { DarkcontextConsumer } from "../../core/utils/context/Darkcontext";
import style from "./LandingColumn2Table.module.css";

const LandingColumn2Table = ({ imgNumber, cardText }) => {
  return (
    <DarkcontextConsumer>
      {(isDarkMode) => {
        return (
          <div
            className={`shadow-lg                 
      ${style.card}
    ${isDarkMode ? style.card_dark : style.card_light}`}
          >
            <img
              src={require(`../../assets/image/Landing/column2/${imgNumber}.png`)}
              alt=''
              className='w-25'
            />
            <div
              className={`fw-bold fs-6 mt-2             

                  ${isDarkMode ? style.text_dark : style.text_light}`}
            >
              {cardText}
            </div>
          </div>
        );
      }}
    </DarkcontextConsumer>
  );
};

export default LandingColumn2Table;

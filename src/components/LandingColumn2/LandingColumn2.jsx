import React from "react";
import LandingColumn2Table from "../LandingColumn2Table/LandingColumn2Table";
import Fade from "react-reveal/Fade";
import style from "./LandingColumn2.module.css";

const LandingColumn2 = ({ lanCol2DataOne, lanCol2DataTwo }) => {
  //data of page come from api
  const datas1 = lanCol2DataOne;
  const datas2 = lanCol2DataTwo;

  return (
    <div className={style.big_bg}>
      <div className={`mt-4 ${style.cover}`}>
        <Fade bottom>
          <div className={`${style.row}`}>
            {datas1.map((data) => (
              <LandingColumn2Table
                key={data.id}
                imgNumber={data.id}
                cardText={data.name}
              />
            ))}
          </div>
        </Fade>
        <Fade bottom>
          <div className={`${style.row}`}>
            {datas2.map((data) => (
              <LandingColumn2Table
                key={data.id}
                imgNumber={data.id}
                cardText={data.name}
              />
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingColumn2;

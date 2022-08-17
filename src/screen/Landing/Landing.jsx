import React, { useEffect, useState } from "react";
import GetApi from "../../core/Services/api/GetApi/GetApi";
import IntroLanding from "../../components/IntroLanding/IntroLanding";
import Title from "../../components/Title/Title";
import LandingColumn1 from "../../components/LandingColumn1/LandingColumn1";
import LandingColumn2 from "../../components/LandingColumn2/LandingColumn2";
import MoreBtn from "../../components/common/MoreBtn/MoreBtn";
import LandingColumn3 from "../../components/LandingColumn3/LandingColumn3";
import LandingColumn4 from "../../components/LandingColumn4/LandingColumn4";
import LandingColumn5 from "../../components/LandingColumn5/LandingColumn5";
import LandingColumn6 from "../../components/LandingColumn6/LandingColumn6";
import ScrollToTop from "react-scroll-to-top";

//animation
import Fade from "react-reveal/Fade";
import ReadingProgress from "react-reading-progress-plus";

const Landing = ({ isDarkMode }) => {
  //landing column 2 data come from api
  const [lanCol2Data, setLanCol2Data] = useState([]);

  useEffect(() => {
    GetApi("http://localhost:5000/api/category/getall").then((res) =>
      setLanCol2Data(res)
    );
  }, []);

  return (
    <>
      <ReadingProgress targetEl='#target-el' />
      <div id='target-el'>
        <ScrollToTop />
        <IntroLanding />
        <Fade>
          <Title
            firstDescription='خدمات'
            secondDescription='تمام آنچه شما نیاز دارید'
          />
        </Fade>
        <Fade>
          <LandingColumn1 />
        </Fade>
        <Fade>
          <Title
            firstDescription='دسته بندی ها'
            secondDescription='گستره ی وسیعی از موضاعات'
            marginTop='5em'
          />
        </Fade>

        <LandingColumn2
          lanCol2DataOne={lanCol2Data.slice("0", "4")}
          lanCol2DataTwo={lanCol2Data.slice("4", "8")}
        />
        <Fade>
          <MoreBtn BtnText='بیشتر' isDarkMode={isDarkMode} />
        </Fade>
        <Fade>
          <Title
            firstDescription='دوره ها'
            secondDescription='اخرین دوره های موجود '
            marginTop='5em'
          />
        </Fade>

        <LandingColumn3 isDarkMode={isDarkMode} />

        <Fade>
          <Title
            firstDescription='اساتید برتر'
            secondDescription='اساتید برتر مجموعه'
            diffrentWidth='250px'
            marginTop='5em'
          />
        </Fade>

        <LandingColumn4 />
        <Fade>
          <Title
            firstDescription='اخبار و مقالات'
            secondDescription='برترین مقالات هفته'
            marginTop='6em'
          />
        </Fade>

        <LandingColumn5 isDarkMode={isDarkMode} />

        <Fade>
          <Title
            firstDescription='پیشنهادات و انتقادات'
            secondDescription='با ما در ارتباط باشید'
            marginTop='3em'
          />
        </Fade>

        <LandingColumn6 isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default Landing;

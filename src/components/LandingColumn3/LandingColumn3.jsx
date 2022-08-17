import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoreBtnSmall from "../common/MoreBtnSmall/MoreBtnSmall";
import Fade from "react-reveal/Fade";
import GetApi from "../../core/Services/api/GetApi/GetApi";
import style from "./LandingColumn3.module.css";

const LandingColumn3 = ({ isDarkMode }) => {
  const handelChanger = (data) => {
    const cloneDatas = { ...datas };
    const changerState = (cloneDatas.rightDatas = data);
    setDatas({ ...datas, rightDatas: [changerState] });
  };

  const [datas, setDatas] = useState({
    leftDatas: [],
    rightDatas: [],
  });

  //call api
  useEffect(() => {
    const getter = async () => {
      const res = await GetApi("http://localhost:5000/api/course/getall");
      setDatas({ rightDatas: [res[0]], leftDatas: res.slice(0, 3) });
    };

    getter();
  }, []);

  const { leftDatas, rightDatas } = datas;

  return (
    <div className={`container-fluid ${style.big_bg}`}>
      <div
        className={`container mt-4  d-flex justify-content-around align-items-center ${style.cover}`}
      >
        <Fade>
          <div
            className={`shadow py-2  ${style.left_col}`}
            style={{ background: isDarkMode ? "#242835" : "#fff" }}
          >
            {leftDatas.map((data) => (
              <img
                onClick={() => handelChanger(data)}
                key={data.lesson._id}
                className='mx-auto mt-4 '
                src={require(`../../assets/image/Landing/column5/${data.lesson.image}`)}
                alt=''
              />
            ))}

            <Link to='/courses'>
              <MoreBtnSmall text='بیشتر' isDarkMode={isDarkMode} />
            </Link>
          </div>
        </Fade>
        <Fade>
          <div
            className={`shadow d-flex flex-column ${style.right_col}`}
            style={{ background: isDarkMode ? "#242835" : "#fff" }}
          >
            {rightDatas.map((element) => (
              <React.Fragment key={element.lesson._id}>
                <img
                  src={require(`../../assets/image/Landing/column5/${element.lesson.image}`)}
                  alt=''
                  className='mx-auto mt-3'
                />
                <div
                  className='d-flex justify-content-between align-items-center mx-auto mt-4 px-3'
                  style={{ width: "90%" }}
                >
                  <p
                    className='fw-bold fs-4 m-0'
                    style={{ color: isDarkMode ? "#fff" : "#000" }}
                  >
                    {element.title}
                  </p>
                  <p
                    className='m-0'
                    style={{ color: isDarkMode ? "#fff" : "#6c757d" }}
                  >
                    {element.auther}
                  </p>
                </div>
                <div
                  className='d-flex justify-content-around align-items-center mx-auto mt-1 p-3'
                  style={{ width: "90%" }}
                >
                  <p
                    className='  m-0'
                    style={{
                      fontSize: "13px",
                      width: "82%",
                      color: isDarkMode ? "#fff" : "#6c757d",
                    }}
                  >
                    {element.lesson.description}
                  </p>

                  <Link
                    to={{
                      pathname: `/CoursesDetails/${element._id}`,
                      state: element,
                    }}
                  >
                    <MoreBtnSmall text='بیشتر' isDarkMode={isDarkMode} />
                  </Link>
                </div>
              </React.Fragment>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default LandingColumn3;

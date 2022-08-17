import React, { useState } from "react";
import style from "./Comment.module.css";
import Fade from "react-reveal/Fade";

const Description = ({ location, isDarkMode }) => {
  //for fixing reload problem
  const [data] = useState(location.state);

  return (
    <div>
      <Fade>
        <p
          className={`m-2 ${style.text_cover} `}
          style={{ color: isDarkMode ? "#fff" : "black" }}
        >
          {data.text || data.lesson.description}
        </p>
      </Fade>
      <div
        className='d-flex justify-content-between align-items-center'
        style={{ padding: "0 13px" }}
      >
        <div className='text-muted' style={{ fontSize: "13px" }}>
          <span style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}>
            {data.category || data.lesson.topics}
          </span>
          <span className='mx-2'> | </span>
          <span style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}>
            {"11/02/1395" || data.startDate}
          </span>
        </div>
        <div className='text-warning'>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-fill'></i>
          <i className='bi bi-star-half'></i>
          <i className='bi bi-star'></i>
          <span
            style={{
              fontSize: "13px",
              paddingLeft: "5px",
              color: isDarkMode ? "#e1dfdf" : "#000",
            }}
          >
            (120,233)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Description;

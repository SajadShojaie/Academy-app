import React from "react";
import { NavLink } from "react-router-dom";
import Comment from "../Comment/Comment";
import style from "./BlogDetailsRight.module.css";
import Fade from "react-reveal/Fade";

const BlogDetailsRight = ({
  page,
  commentpage,
  imgUrl,
  dataForPage,
  isDarkMode,
}) => {
  return (
    <div
      className={`shadow mt-3 d-flex flex-column p-5 ${style.BlogDetailsRight}`}
      style={{ background: isDarkMode ? "#242835" : "#fff" }}
    >
      <Fade>
        {dataForPage !== null && (
          <img
            className='border'
            src={require(`../../assets/image/${imgUrl}/${
              dataForPage !== null &&
              (dataForPage.image || dataForPage.lesson.image)
            }`)}
            style={{ borderRadius: "15px" }}
            alt=''
          />
        )}
      </Fade>

      <Fade>
        <h2
          className='text-center my-4 fw-bold fs-4'
          style={{ color: isDarkMode ? "#fff" : "black" }}
        >
          {dataForPage !== null &&
            (dataForPage.title || dataForPage.lesson.lessonName)}
        </h2>
      </Fade>
      <div
        className='mt-4'
        style={{
          direction: "rtl",
        }}
      >
        <NavLink
          to={{
            pathname: `/${page}/${dataForPage !== null && dataForPage._id}`,
            state: dataForPage,
          }}
          className={`px-3 py-2 mx-4 fw-bold ${style.desc}  `}
          activeClassName={
            isDarkMode ? style.active_link_dark : style.active_link_light
          }
        >
          {" "}
          توضیحات{" "}
        </NavLink>

        <NavLink
          to={{
            pathname: `/${page}/${
              dataForPage !== null && dataForPage._id
            }/people-comment`,
            state: dataForPage,
          }}
          className={`px-4 py-2 fw-bold ${style.opinion}`}
          activeClassName={
            isDarkMode ? style.active_link_dark : style.active_link_light
          }
        >
          {" "}
          نظرات{" "}
        </NavLink>
      </div>
      <Comment commentpage={commentpage} isDarkMode={isDarkMode} />
    </div>
  );
};

export default BlogDetailsRight;

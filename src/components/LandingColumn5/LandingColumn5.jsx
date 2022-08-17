import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetApi from "../../core/Services/api/GetApi/GetApi";
import LandingColumn5Table from "../LandingColumn5Table/LandingColumn5Table";
import MoreBtnSmall from "../../components/common/MoreBtnSmall/MoreBtnSmall";
import Flip from "react-reveal/Flip";
import style from "./LandingColumn5.module.css";

const LandingColumn5 = ({ isDarkMode }) => {
  const [News, setNews] = useState([]);
  const [Article, setArticle] = useState([]);
  //call api

  useEffect(() => {
    const getter = async () => {
      const news = await GetApi("http://localhost:5000/api/news/category/news");
      setNews(news.slice(0, 3));

      const article = await GetApi(
        "http://localhost:5000/api/news/category/news"
      );
      setArticle(article.slice(0, 3));
    };

    getter();
  }, []);

  return (
    <div
      className={` ${style.cover} ${
        isDarkMode ? style.cover_dark : style.cover_light
      }`}
    >
      <div
        className={`${style.main_col} ${
          isDarkMode ? style.main_col_dark : style.main_col_light
        } `}
      >
        <p
          className={`shadow ${style.title} ${
            isDarkMode ? style.title_dark : style.title_light
          }`}
        >
          اخبار
        </p>
        <div className='mt-5'>
          {News.map((blog) => (
            <Flip top key={blog._id}>
              <LandingColumn5Table
                data={blog}
                text={blog.text.slice(0, 30)}
                img={blog.image}
                isDarkMode={isDarkMode}
              />
            </Flip>
          ))}
          <Link to='/blogs' className='w-25' style={{ float: "left" }}>
            <MoreBtnSmall
              text='بیشتر'
              margin='5px 14px'
              isDarkMode={isDarkMode}
            />
          </Link>
        </div>
      </div>

      <div
        className={`${style.main_col} ${
          isDarkMode ? style.main_col_dark : style.main_col_light
        } `}
      >
        <p
          className={`shadow ${style.title} ${
            isDarkMode ? style.title_dark : style.title_light
          }`}
        >
          مقالات
        </p>
        <div className='mt-5'>
          {Article.map((course) => (
            <Flip top key={course._id}>
              <LandingColumn5Table
                data={course}
                text={course.text.slice(0, 30)}
                img={course.image}
                isDarkMode={isDarkMode}
              />
            </Flip>
          ))}
          <Link className='w-25' style={{ float: "left" }} to='blogs'>
            <MoreBtnSmall
              text='بیشتر'
              margin='5px 14px'
              isDarkMode={isDarkMode}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingColumn5;

/* map  another more btn*/

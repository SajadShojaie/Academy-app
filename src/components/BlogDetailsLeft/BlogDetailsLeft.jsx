import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import MiniBlogDetails from "../MiniBlogDetails/MiniBlogDetails";
import GetApi from "../../core/Services/api/GetApi/GetApi";
import style from "./BlogDetailsLeft.module.css";
import Fade from "react-reveal/Fade";

const BlogDetailsLeft = () => {
  const [datas, setDatas] = useState([]);
  const [isPendeing, setIsPendeing] = useState(true);

  // const params = useParams();

  //call api
  useEffect(() => {
    GetApi("http://localhost:5000/api/news/topArticles").then((res) => {
      setDatas(res);
      setIsPendeing(false);
    });
  }, []);

  return (
    <div className={`shadow mx-3 mt-3  ${style.BlogDetailsLeft}`}>
      <Fade>
        <div className={` mt-3 shadow fw-bold ${style.title}`}>
          <img
            src={require(`../../assets/image/Blog-details/left/01.png`)}
            style={{ height: "50%", width: "auto" }}
            alt=''
            className='m-2'
          />
          <span>اخبارهای مرتبط</span>
        </div>
        <div>
          {isPendeing ? (
            <div className='text-center'>loading</div>
          ) : (
            <div>
              {datas.map((data) => (
                <NavLink
                  to={{
                    pathname: `/BlogsDetails/${data._id}`,
                    state: data,
                  }}
                  key={data._id}
                >
                  <MiniBlogDetails data={data} />
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </Fade>
    </div>
  );
};

export default BlogDetailsLeft;

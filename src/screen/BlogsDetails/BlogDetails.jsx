import React from "react";
import style from "./BlogDetails.module.css";
import BlogDetailsRight from "./../../components/BlogDetailsRight/BlogDetailsRight";
import BlogDetailsLeft from "./../../components/BlogDetailsLeft/BlogDetailsLeft";
//tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataGetter from "../../core/Services/api/GetApi/DataGetter";
import { useParams } from "react-router-dom";

const BlogsDetails = ({ location }) => {
  //get id of blog from params
  const pageParams = useParams();

  //get data of page base of id
  const dataForPage = DataGetter(
    `http://localhost:5000/api/news/${pageParams.id}`,
    pageParams.id
  );

  return (
    <div className={` d-flex  mt-5 ${style.cover}`}>
      <ToastContainer bodyClassName={style.fontTost} />

      <BlogDetailsLeft />
      <BlogDetailsRight
        page='BlogsDetails'
        commentpage='BlogsDetails'
        imgUrl='Blog-details/Right'
        dataForPage={dataForPage}
      />
    </div>
  );
};

export default BlogsDetails;

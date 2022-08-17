import React, { useEffect, useState } from "react";
import GetApi from "../../../core/Services/api/GetApi/GetApi";
import PostApi from "../../../core/Services/api/PostApi/PostApi";
import { getItem } from "../../../core/Services/Storage/Storage";
import style from "./Like.module.css";

const Like = ({ thisIconData , isDarkMode}) => {
  //like state
  const [LikeState, setLikeState] = useState(false);
  const [LikeNumber, setLikeNumber] = useState(3);

  //get student info from localstorage
  const studentId = getItem("studentModle");

  //main obj
  const userObj = {
    termId: thisIconData._id,
    userId: JSON.parse(studentId)._id,
  };

  //caling aoi for number like
  // useEffect(() => {
  //   const getterData = async () => {
  //     const result = await GetApi(
  //       `http://localhost:5000/api/course/likeCount/:${userObj.termId}`
  //     );
  //     console.log(result);
  //     setLikeNumber(result.like);
  //   };

  //   getterData();
  // });

  //like functionality
  const handelLike = () => {
    setLikeState(!LikeState);

    if (LikeState) {
      setLikeNumber(LikeNumber - 1);
      PostApi("http://localhost:5000/api/course/dislike", userObj);
    } else {
      setLikeNumber(LikeNumber + 1);
      PostApi("http://localhost:5000/api/course/like", userObj);
    }
  };

  return (
    <div>
      <span className={style.like_number}>
          <span style={{ color: isDarkMode ? "#fff" : "#000" }} > {LikeNumber} </span>
        </span>

      <i
        className={`bi bi-heart-fill ${LikeState && "text-danger"} ${
          style.like_icon
        }`}
        onClick={() => handelLike()}
      ></i>
    </div>
  );
};

export default Like;

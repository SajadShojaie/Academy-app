import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PostApi from "../../core/Services/api/PostApi/PostApi";
import { getItem } from "../../core/Services/Storage/Storage";
import style from "./OnlineChat.module.css";

const OnlineChat = () => {
  //toggle icon
  const [show, setShow] = useState(false);

  //main state
  const [comment, setComment] = useState([]);

  //call api
  useEffect(() => {}, []);

  //new comment state
  const [newComment, setnewComment] = useState("");

  //create random id
  const id = Math.round(Math.random() * 1000);

  //get user info
  const studentModle = JSON.parse(getItem("studentModle"));

  //send new comment
  const hendelsender = () => {
    if (newComment.length > 0) {
      const obj = {
        postId: id,
        email: studentModle.email,
        username: studentModle.fullName,
        comment: newComment,
      };
      setComment([...comment, obj]);
      setnewComment("");

      //call api
      const res = PostApi("http://localhost:5000/api/comments/send", obj);

      //toastify
      if (res.then((e) => e.status === 200)) {
        toast.success("با موفقیت ارسال شد");

        // const getter = async () => {
        //   const res = await axios.get("http://localhost:5000/api/comments/");
        //   setComment(res.data.slice(-1));
        // };
        // getter();
      }
    }
  };

  return (
    <>
      <div className={style.icon_cover}>
        <img
          style={{ width: "75%", cursor: "pointer" }}
          src={require("../../assets/image/online-chat/main-icon.png")}
          alt=''
          onClick={() => setShow(true)}
        />
      </div>
      {show && (
        <div className={style.chat_cover}>
          <div
            className={`d-flex justify-content-between align-items-center p-2 px-3 ${style.chat_header}`}
          >
            <div>
              <p className='m-0' style={{ fontWeight: "bold" }}>
                Future Academy
              </p>
              <p className='m-0' style={{ fontSize: "12px" }}>
                Online chat powered by Future
              </p>
            </div>
            <i className='bi bi-x-lg' onClick={() => setShow(false)}></i>
          </div>
          <div className={style.chat_body}>
            {comment.length > 0 &&
              comment.map((item) => (
                <div key={item.id} className='d-block'>
                  <div
                    className={`d-flex justify-content-between mt-3 mx-3 p-2 px-3 ${style.message}`}
                  >
                    <span>{item.comment}</span>
                    <i className='bi bi-check mx-1'></i>
                  </div>
                  {item.answer && (
                    <div
                      style={{ direction: "ltr", float: "left" }}
                      className={`d-flex justify-content-between mt-3 mx-3 p-2 px-3 ${style.message}`}
                    >
                      <span>{item.answer}</span>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div
            className={`d-flex justify-content-between align-items-center p-2 ${style.chat_bottom}`}
          >
            <img
              style={{ transform: "rotateY(180deg)", cursor: "pointer" }}
              src={require("../../assets/image/online-chat/sender.png")}
              alt=''
              onClick={hendelsender}
            />
            <input
              type='text'
              className={style.chat_input}
              value={newComment}
              onChange={(e) => setnewComment(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default OnlineChat;

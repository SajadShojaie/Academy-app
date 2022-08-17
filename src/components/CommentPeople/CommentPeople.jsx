import React from "react";
import MyPopUp from "../common/PopUp/MyPopUp";
import style from "./CommentPeople.module.css";

const CommentPeople = ({
  data,
  handelLike,
  handeReplLike,
  handelDisLike,
  handelRepDisLike,
  handelReply,
  handelAddReply,
  replyValue,
  replyeOnChange,
}) => {
  const handelConsole = (blockedData) => {
    console.log(blockedData);
  };

  return (
    <>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <div className={`shadow  ${style.chat}`} style={{ direction: "rtl" }}>
          <span className='fw-bold' style={{ fontSize: "14px" }}>
            {data.username}
          </span>
          <span className='mx-2'> | </span>
          <span className='fw-bold' style={{ fontSize: "13px" }}>
            {data.time} 
          </span>
          <p className='mt-2 text-muted' style={{ fontSize: "14px" }}>
            {data.text}
          </p>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <span>{data.LikeNumber}</span>
              <i
                className={`bi bi-hand-thumbs-up-fill ${
                  data.LikeState ? "text-success" : ""
                }`}
                onClick={handelLike}
              ></i>
              <span className='mx-2'> | </span>
              <span>{data.disLikeNumber}</span>
              <i
                className={`bi bi-hand-thumbs-down-fill ${
                  data.disLikeState ? "text-danger" : ""
                } `}
                onClick={handelDisLike}
              ></i>
            </div>
            <div>
              <i
                className='bi bi-reply text-primary fs-6'
                onClick={handelReply}
              ></i>
              <span className='mx-2'> | </span>
              <MyPopUp
                mytrigger={
                  <i className='bi bi-exclamation-octagon text-warning fs-6'></i>
                }
                text='می خواهید این پیام را گزارش کنید؟'
                action={
                  <div onClick={() => handelConsole(data)}>گزارش کردن</div>
                }
                // {<Admin blockedData={data}>گزارش کردن</Admin>}
              />
            </div>
          </div>
        </div>
        <img
          src={require(`../../assets/image/CommentPeople/${data.imgname}`)}
          className={style.img_user}
          alt=''
        />
      </div>

      {data.replies &&
        data.replies.map((reply) => (
          <div
            key={reply.id}
            className='d-flex justify-content-between align-items-center my-3'
            style={{ width: "93%" }}
          >
            <div
              className={`shadow  ${style.chat}`}
              style={{ direction: "rtl" }}
            >
              <span className='fw-bold' style={{ fontSize: "14px" }}>
                {reply.username}
              </span>
              <span className='mx-2'> | </span>
              <span className='fw-bold' style={{ fontSize: "13px" }}>
                {reply.time} 
              </span>
              <p className='mt-2 text-muted' style={{ fontSize: "14px" }}>
                {reply.text}
              </p>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <span>{reply.LikeNumber}</span>
                  <i
                    className={`bi bi-hand-thumbs-up-fill ${
                      reply.LikeState ? "text-success" : ""
                    }`}
                    onClick={(data) => handeReplLike(reply, data)}
                  ></i>
                  <span className='mx-2'> | </span>
                  <span>{reply.disLikeNumber}</span>
                  <i
                    className={`bi bi-hand-thumbs-down-fill ${
                      reply.disLikeState ? "text-danger" : ""
                    } `}
                    onClick={(data) => handelRepDisLike(reply, data)}
                  ></i>
                </div>
                <div>
                  <MyPopUp
                    mytrigger={
                      <i className='bi bi-exclamation-octagon text-warning fs-6'></i>
                    }
                    text='می خواهید این پیام را گزارش کنید؟'
                    action={
                      <div onClick={() => handelConsole(reply)}>گزارش کردن</div>
                    }
                    // {<Admin blockedData={data}>گزارش کردن</Admin>}
                  />
                </div>
              </div>
            </div>
            <img
              src={require(`../../assets/image/CommentPeople/${reply.imgname}`)}
              className={style.img_user}
              alt=''
            />
          </div>
        ))}

      {data.ReplyInput && (
        <>
          <textarea
            placeholder='متن پیام ریپلی ...'
            className={style.reply_textarea}
            value={replyValue}
            onChange={(e) => replyeOnChange(e)}
          />
          <button
            type='button'
            className='btn btn-success'
            onClick={handelAddReply}
          >
            ارسال
          </button>
          <button
            type='button'
            className='btn btn-danger mx-2'
            onClick={handelReply}
          >
            بیخیال
          </button>
        </>
      )}
    </>
  );
};

export default CommentPeople;

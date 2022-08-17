import React, { useEffect, useState } from "react";
import CommentPeople from "../CommentPeople/CommentPeople";
import Fade from "react-reveal/Fade";
//time
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import style from "./Comment.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const OpinionSection = ({ location, CommentData }) => {
  useEffect(() => {
    const getterComment = async () => {
      const res = await axios.get("http://localhost:5000/api/comments/");
      // setInformation({ ...Information, datas: res.data });
      // console.log(res.data);
    };
    getterComment();
  }, []);

  //main state
  const [Information, setInformation] = useState({
    datas: [
      {
        username: "استاد بحر",
        imgname: "bahr.jpg",
        text: "بسیار عالی خیلی سایت عالی شده",
        time: "4 ساعت پیش",
        id: 1,
        LikeState: false,
        LikeNumber: 10,
        disLikeState: false,
        disLikeNumber: 0,
        ReplyInput: false,
        replies: [],
      },
      {
        username: "استاد نظری",
        imgname: "nazari.jpg",
        text: "بسیار دیزاین خوبی شد",
        time: "3 ساعت پیش",
        id: 2,
        LikeState: false,
        LikeNumber: 9,
        disLikeState: false,
        disLikeNumber: 0,
        ReplyInput: false,
        replies: [],
      },
    ],
    fixeReload: location.state,
    comment: "",
    Replycomment: "",
    idNumber: 3,
  });

  const { datas, comment, Replycomment, idNumber } = Information;

  //like
  const handelLike = (data) => {
    const cloneData = [...datas];
    const index = cloneData.indexOf(data);

    if (cloneData[index].disLikeState === false) {
      cloneData[index].LikeState = !cloneData[index].LikeState;

      const number = cloneData[index].LikeNumber;

      cloneData[index].LikeNumber = cloneData[index].LikeState
        ? number + 1
        : number - 1;
      setInformation({ ...Information, datas: cloneData });
    }
  };

  //reply like
  const handeReplLike = (repdata, data) => {
    const clone = [...Information.datas];
    const dataIndex = clone.indexOf(data);
    const repIndex = clone[dataIndex].replies.indexOf(repdata);

    if (clone[dataIndex].replies[repIndex].disLikeState === false) {
      clone[dataIndex].replies[repIndex].LikeState =
        !clone[dataIndex].replies[repIndex].LikeState;

      const number = clone[dataIndex].replies[repIndex].LikeNumber;

      clone[dataIndex].replies[repIndex].LikeNumber = clone[dataIndex].replies[
        repIndex
      ].LikeState
        ? number + 1
        : number - 1;
      setInformation({ ...Information, datas: clone });
    }
  };

  //dislike
  const handelDisLike = (data) => {
    const cloneData = [...datas];
    const index = cloneData.indexOf(data);

    if (cloneData[index].LikeState === false) {
      cloneData[index].disLikeState = !cloneData[index].disLikeState;

      const number = cloneData[index].disLikeNumber;

      cloneData[index].disLikeNumber = cloneData[index].disLikeState
        ? number + 1
        : number - 1;
      setInformation({ ...Information, datas: cloneData });
    }
  };

  //reply dislike
  const handelRepDisLike = (repdata, data) => {
    const clone = [...Information.datas];
    const dataIndex = clone.indexOf(data);
    const repIndex = clone[dataIndex].replies.indexOf(repdata);

    if (clone[dataIndex].replies[repIndex].LikeState === false) {
      clone[dataIndex].replies[repIndex].disLikeState =
        !clone[dataIndex].replies[repIndex].disLikeState;

      const number = clone[dataIndex].replies[repIndex].disLikeNumber;

      clone[dataIndex].replies[repIndex].disLikeNumber = clone[dataIndex]
        .replies[repIndex].disLikeState
        ? number + 1
        : number - 1;
      setInformation({ ...Information, datas: clone });
    }
  };

  //add new comment
  const handelSendComment = () => {
    if (comment.length > 0) {
      //TimePast
      const TimePast = moment().startOf("minute").fromNow();

      const obj = {
        username: "سجاد",
        imgname: "future.png",
        text: comment,
        time: TimePast === "a few seconds ago" ? "همین حالا" : "چند دقیقه پیش",
        id: idNumber,
        LikeState: false,
        LikeNumber: 0,
        disLikeState: false,
        disLikeNumber: 0,
        ReplyInput: false,
        replies: [],
      };
      setInformation({
        ...Information,
        datas: [obj, ...datas],
        comment: "",
        idNumber: idNumber + 1,
      });

      toast.success("کامنت شما با موفقیت ثبت شد");
    }
  };

  //show input for handelReply
  const handelReply = (data) => {
    const clone = { ...Information };
    const index = clone.datas.indexOf(data);
    clone.datas[index].ReplyInput = !clone.datas[index].ReplyInput;
    setInformation({ ...Information, datas: clone.datas });
  };

  //handelAddReply
  const handelAddReply = (data) => {
    if (Replycomment.length > 0) {
      //TimePast
      const TimePast = moment().startOf("minute").fromNow();

      const replyObj = {
        username: "سجاد",
        imgname: "future.png",
        text: Replycomment,
        time: TimePast === "a few seconds ago" ? "همین حالا" : "چند دقیقه پیش",
        id: idNumber,
        LikeState: false,
        LikeNumber: 0,
        disLikeState: false,
        disLikeNumber: 0,
        ReplyInput: false,
        replies: [],
      };

      //find specefic obj and add repobj to there arry
      const clone = [...Information.datas];
      const index = clone.indexOf(data);
      clone[index].replies = [replyObj, ...clone[index].replies];
      clone[index].ReplyInput = false;

      setInformation({
        ...Information,
        datas: clone,
        Replycomment: "",
        idNumber: idNumber + 1,
      });

      toast.success("کامنت شما با موفقیت ثبت شد");
    }
  };

  return (
    <div>
      <div className={`${style.cover_comment}`}>
        <Fade top>
          {datas.map((data) => (
            <CommentPeople
              key={data.id}
              data={data}
              handelLike={() => handelLike(data)}
              handeReplLike={(rep) => handeReplLike(rep, data)}
              handelDisLike={() => handelDisLike(data)}
              handelRepDisLike={(repdata) => handelRepDisLike(repdata, data)}
              handelReply={() => handelReply(data)}
              handelAddReply={() => handelAddReply(data)}
              replyValue={Replycomment}
              replyeOnChange={(e) =>
                setInformation({ ...Information, Replycomment: e.target.value })
              }
            />
          ))}
        </Fade>
      </div>

      <Fade top>
        <textarea
          className={`shadow mt-4 ${style.cover_textarea}`}
          placeholder='نوشتن پیام'
          value={comment}
          onChange={(e) =>
            setInformation({ ...Information, comment: e.target.value })
          }
        ></textarea>
      </Fade>
      <Fade top>
        <button
          className={`btn btn-success w-100 mt-2`}
          onClick={handelSendComment}
        >
          ارسال پیام
        </button>
      </Fade>
    </div>
  );
};

export default OpinionSection;

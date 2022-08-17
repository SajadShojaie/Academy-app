import React, { useEffect, useState } from "react";
import UserPanelTable from "../../UserPanelTable/UserPanelTable";
import GetApi from "../../../core/Services/api/GetApi/GetApi";
import { getItem } from "../../../core/Services/Storage/Storage";
import PostApi from "../../../core/Services/api/PostApi/PostApi";
import { toast } from "react-toastify";

const MyCourses = ({ location, history }) => {
  //state
  const [myCoursesData, setMyCoursesData] = useState({
    datas: [],
    ispending: true,
  });

  //user info in local storage
  const studentModle = JSON.parse(getItem("studentModle"));

  //call api
  useEffect(() => {
    const getter = async () => {
      const res = await GetApi(
        `http://localhost:5000/api/student/${studentModle._id}`
      );
      setTimeout(() => {
        setMyCoursesData({ datas: res.courses, ispending: false });
      }, 1000);
    };

    getter();
  }, []);

  const handelDelete = async (data) => {
    const res = await PostApi(
      `http://localhost:5000/api/course/removeStudentFromCourse/${studentModle._id}`,
      {
        courseId: data._id,
      }
    );
    console.log(res);
    if (res.status === 200) {
      toast.success("با موفقیت حذف شد");
      setMyCoursesData({
        ...myCoursesData,
        datas: myCoursesData.datas.filter((m) => m !== data),
      });
    }
  };

  return (
    <UserPanelTable
      Datas={myCoursesData.datas}
      isPending={myCoursesData.ispending}
      handelDelete={handelDelete}
      location={location}
      icon={"bi-trash"}
      popUpText={"می خواهید این دوره را حذف کنید؟"}
      titleText='دوره های ثبت شده :'
    />
  );
};

export default MyCourses;

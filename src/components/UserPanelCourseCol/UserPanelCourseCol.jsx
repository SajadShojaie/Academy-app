import React from "react";
import { Link } from "react-router-dom";
import MyPopUp from "../common/PopUp/MyPopUp";
import style from "./UserPanelCourseCol.module.css";

const UserPanelCourseCol = ({
  Datas,
  folder,
  handelDelete,
  icon,
  popUpText,
  location,
  handelAddToMyCourses,
}) => {
  return (
    <>
      {Datas.map((data) => (
        <tr
          key={data._id}
          className={`mt-3 mx-auto d-flex justify-content-between align-items-center px-3 py-2 ${style.cover}`}
        >
          <td className={`${style.coverimg_responsive}`}>
            <Link
              to={{ pathname: `/CoursesDetails/${data._id}`, state: data }}
              style={{ color: "#000" }}
            >
              <img
                src={require(`../../assets/image/user-panel/${folder}/${data.lesson.image}`)}
                alt=''
                style={{ width: "100%", minHeight: "45px", objectFit: "cover" }}
              />
            </Link>
          </td>

          <td>{data.title}</td>
          <td className={`${style.display_responsive}`}>
            {data.teacher.fullName}
          </td>
          <td className={`${style.display_responsive}`}>بهار</td>
          <td>{data.startDate.slice("0", "10")}</td>
          <td className={`${style.display_responsive}`}>
            {data.endDate.slice("0", "10")}
          </td>
          <td>{data.cost}</td>
          <td>
            <MyPopUp
              mytrigger={
                <i
                  className={`bi ${icon} fs-5 mt-1 ${
                    icon === "bi-trash" ? "text-danger" : "text-success"
                  }`}
                ></i>
              }
              text={popUpText}
              action={
                location.pathname === "/user-panel/all-courses" ? (
                  <div onClick={() => handelAddToMyCourses(data)}>افزودن</div>
                ) : (
                  <div onClick={() => handelDelete(data)}>حذف</div>
                )
              }
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserPanelCourseCol;

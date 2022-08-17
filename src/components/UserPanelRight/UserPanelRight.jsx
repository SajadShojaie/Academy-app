import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserInfo } from "../../core/utils/context/UserInformation.context";
import MyPopUp from "../common/PopUp/MyPopUp";
import Fade from "react-reveal/Fade";
import style from "./UserPanelRight.module.css";

const UserPanelRight = () => {
  //static data for creating list
  const [datas] = useState([
    { text: "پیشخوان", icon: "bi-house-fill", id: "" },
    { text: "ویرایش پروفایل", icon: "bi-pencil-square", id: "edit-profile" },
    { text: "دوره های من", icon: "bi-list-ul", id: "my-courses" },
    { text: "لیست دوره ها", icon: "bi-list", id: "all-courses" },
  ]);

  //get user info from context
  const { data: userPanelData, profile } = useUserInfo();

  return (
    <Fade>
      <div className={`shadow mt-3 ${style.right}`}>
        <div
          className={`d-flex  align-items-center my-5 ${style.img_responsive}`}
        >
          <div>
            <p
              className={`m-0 fw-bold fs-6 text-center ${style.text_responsive}`}
            >
              {userPanelData.fullName}
            </p>
            <p
              className={`m-0 fs-6 text-center text-muted mt-2 ${style.text_responsive}`}
            >
              {userPanelData.role}
            </p>
          </div>

          {/* propfile image  */}
          <div className={style.holder_img}>
            <img
              className={style.profile_img}
              src={require(`../../assets/image/user-panel/All-courses/${profile}`)}
              alt='propfile'
            />
          </div>
        </div>
        {datas.map((data) => (
          <div
            className={`d-flex justify-content-around align-items-center w-50 mx-auto  mt-2 ${style.cursor_pointer}`}
            key={data.id}
          >
            <div
              className={` fw-bold mt-2 flex-md-fill text-center ${style.text_responsive} `}
            >
              <Fade>
                <NavLink
                  to={`/user-panel/${data.id}`}
                  className='text-dark'
                  activeClassName={`${style.active_link}`}
                  exact={true}
                >
                  {data.text}
                </NavLink>
              </Fade>
            </div>
            <NavLink
              to={`/user-panel/${data.id}`}
              className='text-dark'
              activeClassName={`${style.active_icon}`}
              exact={true}
            >
              <i
                className={`bi ${data.icon} fs-3  ${style.icon_pos} ${style.icon_responsive}`}
              ></i>
            </NavLink>
          </div>
        ))}
        <div
          className={`d-flex justify-content-around align-items-center mx-auto w-50 mt-2 ${style.cursor_pointer}`}
        >
          <div
            className=' fw-bold flex-md-fill text-center'
            style={{ marginTop: "-3px" }}
          >
            <MyPopUp
              mytrigger={
                <div className={`text-dark ${style.text_responsive}`}>خروج</div>
              }
              text='می خواهید از پنل خارج شوید؟'
              action={
                <Link to='/logout' style={{ color: "#fff" }}>
                  خروج
                </Link>
              }
            />
          </div>
          <i className='bi bi-box-arrow-right fs-3'></i>
        </div>
      </div>
    </Fade>
  );
};

export default UserPanelRight;

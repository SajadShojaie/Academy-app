import React from "react";
import UserPanelRight from "../../components/UserPanelRight/UserPanelRight";
import UserPanelLeft from "../../components/UserPanelLeft/UserPanelLeft";
import { ToastContainer } from "react-toastify";
import UserInfoProvider from "../../core/utils/context/UserInformation.context";
import "react-toastify/dist/ReactToastify.css";
import style from "./UserPanel.module.css";
import PostApi from "../../core/Services/api/PostApi/PostApi";

const UserPanel = ({ location, cart, handelAddToMyCourses }) => {

  return (
    <UserInfoProvider>
      <div
        className={` mt-5 d-flex justify-content-between align-items-center ${style.cover}`}
      >
        <ToastContainer bodyClassName={style.fontTost} />

        <UserPanelLeft
          location={location}
          cart={cart}
          handelAddToMyCourses={handelAddToMyCourses}
        />
        <UserPanelRight />
      </div>
    </UserInfoProvider>
  );
};

export default UserPanel;

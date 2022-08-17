import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Pishkhan from "./Phishkhan/Phishkhan";
import EditProfile from "./EditProfile/EditProfile";
import MYCourses from "./MyCourses/MyCourses";
import AllCourses from "./AllCourses/AllCourses";
import style from "./UserPanelLeft.module.css";
import { useState } from "react";
import { useUserInfo } from "../../core/utils/context/UserInformation.context";

const UserPanelLeft = ({
  location,
  cart,
  handelAddToMyCourses,
}) => {
  
  //get user info from context
  const { data: userPanelData } = useUserInfo();

  //empty state that will fill afther useefect finished
  const [Datas, setDatas] = useState([]);

  //for fixing change in this component
  useEffect(() => {
    setDatas([
      { title: "نام کاربری", des: userPanelData.fullName, id: "1" },
      { title: "نقش", des: userPanelData.role, id: "2", style: "not-allowed" },
      { title: "ایمیل", des: userPanelData.email, id: "3" },
      { title: "تاریخ تولد", des: userPanelData.birthDate, id: "4" },
      { title: "کد ملی", des: userPanelData.nationalId, id: "5" },
      { title: "شماره همراه", des: userPanelData.phoneNumber, id: "6" },
      {
        title: "وضعیت",
        des: userPanelData.isActive ? "active" : "un active",
        id: "7",
      },
    ]);
  }, [userPanelData]);


  return (
    <div className={`shadow mt-3 p-4  ${style.left}`}>
      <Switch>
        <Route
          path='/user-panel/edit-profile'
          render={(props) => <EditProfile Datas={Datas} {...props} />}
        />
        <Route
          path='/user-panel/my-courses'
          render={(props) => (
            <MYCourses
              location={location}
              cart={cart}
              {...props}
            />
          )}
        />
        <Route
          path='/user-panel/all-courses'
          render={(props) => (
            <AllCourses
              location={location}
              handelAddToMyCourses={handelAddToMyCourses}
              {...props}
            />
          )}
        />
        <Route render={(props) => <Pishkhan Datas={Datas} {...props} />} />
      </Switch>
    </div>
  );
};

export default UserPanelLeft;

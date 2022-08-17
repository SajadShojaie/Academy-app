import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserPanelCourseCol from "../UserPanelCourseCol/UserPanelCourseCol";
import Paganation from "../common/Paganation/Paganation";
import PaginateMetode from "../common/Paganation/PaginateMetode";
import HandelDataSize from "../common/HandelDataSize/HandelDataSize";
import TableSkeleton from "../../core/utils/Skeleton/TableSkeleton";
import style from "./UserPanelTable.module.css";

const UserPanelTable = ({
  isPending,
  Datas,
  handelDelete,
  popUpText,
  icon,
  titleText,
  location,
  handelAddToMyCourses,
}) => {
  const [data, setdata] = useState({
    // Datas: Datas,
    pageSize: 4,
    curentPage: 1,
  });
  const { pageSize, curentPage } = data;

  const allDatasWithFilter = PaginateMetode(Datas, curentPage, pageSize);

  const handelChanger = (page) => {
    setdata({ ...data, curentPage: page });
  };

  const handelLeft = () => {
    if (curentPage > 1) {
      setdata({ ...data, curentPage: curentPage - 1 });
    }
  };

  const handelRight = () => {
    const pageCount = Math.ceil(Datas.length / pageSize);

    if (curentPage < pageCount) {
      setdata({ ...data, curentPage: curentPage + 1 });
    }
  };

  const handelPageSize = (value) => {
    setdata({ pageSize: value.target.value, curentPage: 1 });
  };

  return (
    <>
      {isPending ? (
        <div className='mt-5 text-center ' style={{ marginLeft: "25px" }}>
          <TableSkeleton />
        </div>
      ) : (
        <>
          {Datas.length === 0 ? (
            <div className='d-flex flex-column text-center pt-4'>
              <img
                src={require("../../assets/image/user-panel/All-courses/undraw_empty_cart_co35.png")}
                alt=''
                style={{ width: "43%", margin: "0 auto" }}
              />
              <p className='text-warning mt-4 fw-bold fs-4'>
                !!!شما دوره ای را ثبت نکردید
              </p>
              <button
                type='button'
                className='btn btn-success w-25 mt-3 mx-auto'
              >
                <Link
                  to={
                    location.pathname === "/user-panel/my-courses"
                      ? "/user-panel/all-courses"
                      : "/courses"
                  }
                  style={{ color: "#fff" }}
                >
                  افزودن دوره جدید
                </Link>
              </button>
            </div>
          ) : (
            <>
              <div className=' d-flex justify-content-between align-items-center'>
                <HandelDataSize
                  pageSize={pageSize}
                  handelPageSize={handelPageSize}
                  number1='2'
                  number2='4'
                  number3='6'
                  color='#fff'
                  background='#a817ff'
                />

                <p className={`mt-2 mx-3 ${style.titre}`}>
                  {titleText}
                  <span className='text-primary'>{Datas.length}</span>
                </p>
              </div>

              <div className={`mt-4 mx-auto p-3 ${style.cover}`}>
                <table className='w-100'>
                  <thead>
                    <tr
                      className={` d-flex justify-content-evenly align-items-center ${style.name_section}`}
                    >
                      <th></th>
                      <th></th>
                      <th> دوره</th>
                      <th className={`${style.display_responsive}`}>استاد</th>
                      <th className={`${style.display_responsive}`}> ترم</th>
                      <th>تاریخ شروع</th>
                      <th className={`${style.display_responsive}`}>
                        تاریخ پایان
                      </th>
                      <th>قیمت</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <UserPanelCourseCol
                      Datas={allDatasWithFilter}
                      handelDelete={handelDelete}
                      folder='All-courses'
                      icon={icon}
                      popUpText={popUpText}
                      location={location}
                      handelAddToMyCourses={handelAddToMyCourses}
                    />
                  </tbody>
                </table>
              </div>

              <div className='mt-4 d-flex justify-content-evenly align-items-center'>
                <Paganation
                  pageSize={pageSize}
                  totalData={Datas.length}
                  curentPage={curentPage}
                  handelChanger={handelChanger}
                  handelLeft={handelLeft}
                  handelRight={handelRight}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserPanelTable;

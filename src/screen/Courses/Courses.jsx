import React, { useState } from "react";
import ControlHeader from "../../components/ControlHeader/ControlHeader";
import TitleFirstLine from "../../components/TitleFirstLine/TitleFirstLine";
import BlogCol from "../../components/BlogCol/BlogCol";
import Paganation from "../../components/common/Paganation/Paganation";
import PaginateMetode from "../../components/common/Paganation/PaginateMetode";
import { ToastContainer } from "react-toastify";
import BlogsSkeleton from "../../core/utils/Skeleton/BlogsSkeleton";
import "react-toastify/dist/ReactToastify.css";
import style from "./Couses.module.css";

const Courses = ({ handelSearch, CoursesIspending, isDarkMode }) => {
  const [DATAS, setDATAS] = useState({
    pageSize: 8,
    curentPage: 1,
    smallshow: true,
    bigShowData: {
      right: "هزینه دوره",
      middle: "تاریخ شروع :",
      left: "تاریخ پایان",
      last: "نام استاد",
    },
  });

  const { pageSize, curentPage, smallshow, bigShowData } = DATAS;

  const handelChanger = (page) => {
    setDATAS({ ...DATAS, curentPage: page });
  };

  const handelLeft = () => {
    if (curentPage > 1) {
      setDATAS({
        ...DATAS,
        curentPage: curentPage - 1,
      });
    }
  };

  const handelRight = () => {
    const pageCount = Math.ceil(handelSearch.length / pageSize);

    if (curentPage < pageCount) {
      setDATAS({ ...DATAS, curentPage: curentPage + 1 });
    }
  };

  const handelPageSize = (value) => {
    setDATAS({ ...DATAS, pageSize: value.target.value, curentPage: 1 });
  };

  const handelchangerRight = () => {
    setDATAS({ ...DATAS, smallshow: true });
  };

  const handelchangerLeft = () => {
    setDATAS({ ...DATAS, smallshow: false });
  };

  //paganation
  const dataWithPaganationFilter = PaginateMetode(
    handelSearch,
    curentPage,
    pageSize
  );

  return (
    <div className={`mt-4 ${style.cover}`}>
      <ToastContainer bodyClassName={style.fontTost} />

      <TitleFirstLine text='دوره ها ' width='200px' isDarkMode={isDarkMode} />
      <div
        className={`container d-flex justify-content-around flex-wrap mt-4 ${style.holder_coursesCol}`}
      >
        <ControlHeader
          kindtext='دوره ها'
          handelchangerRight={handelchangerRight}
          handelchangerLeft={handelchangerLeft}
          handelPageSize={handelPageSize}
          pageSize={pageSize}
          smallshow={smallshow}
          isDarkMode={isDarkMode}
        />
        {CoursesIspending ? (
          // <div className='fs-4 fw-bold text-center mt-4'>Loading...</div>
          <BlogsSkeleton />
        ) : (
          <>
            {dataWithPaganationFilter.length > 0 ? (
              dataWithPaganationFilter.map((data) => (
                <BlogCol
                  key={data._id}
                  data={data}
                  bigShowData={bigShowData}
                  image={data.lesson.image}
                  title={data.lesson.lessonName}
                  des={data.lesson.description}
                  folder='courses'
                  detailPage='CoursesDetails'
                  smallshow={smallshow}
                  isDarkMode={isDarkMode}
                />
              ))
            ) : (
              <div className='text-center '>
                <img
                  className='w-50 mt-4'
                  src={require("../../assets/image/courses/Searching.png")}
                  alt=''
                />
                <p className='fs-4 text-warning'>!!!نتیجه ای یافت نشد</p>
              </div>
            )}
            <div className={`mt-5 ${style.paganation}`}>
              <Paganation
                pageSize={pageSize}
                totalData={handelSearch.length}
                curentPage={curentPage}
                handelChanger={handelChanger}
                handelLeft={handelLeft}
                handelRight={handelRight}
                isDarkMode={isDarkMode}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Courses;

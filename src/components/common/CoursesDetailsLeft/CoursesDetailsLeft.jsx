import React, { useState } from "react";
import Countdown from "react-countdown";
import style from "./CoursesDetailsLeft.module.css";
import Fade from "react-reveal/Fade";

const CoursesDetailsLeft = ({
  dataForPage,
  addDataToCart,
  cartId,
  isDarkMode,
}) => {
  return (
    <div
      className={`shadow  mx-auto mt-3 py-3 ${style.cover}`}
      style={{ background: isDarkMode ? "#242835" : "#fff" }}
    >
      <Fade>
        <div
          className={`shadow  mt-4 ${style.about}`}
          style={{
            background: isDarkMode ? "#3f4a6b" : "none",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <p
            className='m-0  my-2 fs-5 fw-bold '
            style={{ direction: "rtl", padding: "7px 12px 0" }}
          >
            مشخصات دوره
          </p>

          <div
            className=' d-flex justify-content-between align-items-center '
            style={{ background: isDarkMode ? "#d5cfcf" : "#f7f7f7" }}
          >
            <div className='fw-bold text-muted px-3 my-2 '>
              {dataForPage.lesson.lessonName}
            </div>
            <div
              className='fw-bold  px-3 my-2'
              style={{ color: isDarkMode ? "#504c4c" : "#6c757d" }}
            >
              نام دوره
              <i className='p-1 bi bi-book'></i>
            </div>
          </div>

          <div className=' d-flex justify-content-between   align-items-center '>
            <div
              className=' fw-bold px-3 my-2 '
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              {" "}
              بهار{" "}
            </div>
            <div
              className='fw-bold px-3 my-2'
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              ترم ارائه شده
              <i className=' p-1 bi  bi-journal-bookmark'></i>
            </div>
          </div>

          <div
            className=' d-flex justify-content-between   align-items-center '
            style={{ background: isDarkMode ? "#d5cfcf" : "#f7f7f7" }}
          >
            <div className='fw-bold text-muted px-3 my-2 '>
              {dataForPage.startDate}
            </div>
            <div
              className='fw-bold  px-3 my-2'
              style={{ color: isDarkMode ? "#504c4c" : "#6c757d" }}
            >
              شروع ترم <i className='p-1 bi bi-calendar2-event'></i>
            </div>
          </div>

          <div className=' d-flex justify-content-between  mb-2 align-items-center '>
            <div
              className='fw-bold px-3 my-2'
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              {dataForPage.endDate}
            </div>
            <div
              className='fw-bold  px-3 my-2'
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              پایان ترم <i className=' p-1 bi bi-calendar3'></i>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div
          className={`shadow  mt-4 ${style.about}`}
          style={{
            background: isDarkMode ? "#3f4a6b" : "none",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <div className=' d-flex justify-content-between   align-items-center '>
            <div className='fw-bold  px-3 my-2'>
              <i className='bi bi-people-fill'></i>
            </div>
            <div className='fw-bold fs-5 fw-bold px-3 my-2'>ظرفیت</div>
          </div>

          <div
            className=' d-flex justify-content-between   align-items-center '
            style={{ background: isDarkMode ? "#d5cfcf" : "#f7f7f7" }}
          >
            <div className='fw-bold text-muted px-3 my-2'>54</div>
            <div
              className='fw-bold  px-3 my-2'
              style={{ color: isDarkMode ? "#504c4c" : "#6c757d" }}
            >
              ظرفیت کل دوره{" "}
            </div>
          </div>

          <div className=' d-flex justify-content-between   align-items-center '>
            <div
              className='fw-bold px-3 my-2'
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              {dataForPage.students.length}
            </div>
            <div
              className='fw-bold px-3 my-2'
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              تعداد دانشجوی دوره
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div
          className={`shadow  mt-4 ${style.about}`}
          style={{
            background: isDarkMode ? "#3f4a6b" : "none",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <div className=' d-flex justify-content-between   align-items-center '>
            <div className='fw-bold  px-3 my-2'>
              <i className='bi bi-person-square'></i>
            </div>
            <div className='fs-5 fw-bold px-3 my-2'>مدرس</div>
          </div>
          <div
            className=' d-flex align-items-center '
            style={{
              direction: "rtl",
              background: isDarkMode ? "#d5cfcf" : "#f7f7f7",
            }}
          >
            <div className=' px-3 my-2'>
              <img
                className={`${style.img}`}
                src={require(`../../../assets/image/CommentPeople/bahr.jpg`)}
                alt=''
              />
            </div>
            <div className='fw-bold text-muted px-3 my-2'>
              {dataForPage.teacher.fullName}
            </div>
          </div>

          <div>
            <div
              className='fw-bold  px-3 my-2'
              style={{
                direction: "rtl",
                color: isDarkMode ? "#e1dfdf" : "#6c757d",
              }}
            >
              راه های ارتباطی :
            </div>
            <div className=' d-flex justify-content-between   align-items-center '>
              <div
                className='fw-bold  px-3 my-2'
                style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
              >
                {dataForPage.teacher.email}
              </div>
              <div
                className='fw-bold  px-3 my-2'
                style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
              >
                {" "}
                آدرس ایمیل{" "}
              </div>
            </div>
            <div className=' d-flex justify-content-between   align-items-center '>
              <div
                className='fw-bold  px-3 my-2'
                style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
              >
                bahr_ac
              </div>
              <div
                className='fw-bold  px-3 my-2'
                style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
              >
                اینستاگرام{" "}
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <Fade>
        <div
          className={`shadow  mt-4 ${style.about}`}
          style={{
            background: isDarkMode ? "#3f4a6b" : "none",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <div className=' d-flex justify-content-between   align-items-center '>
            <div
              className='fw-bold text-danger px-3 my-2'
              style={{ direction: "rtl" }}
            >
              <del> {dataForPage.cost} تومان</del>
            </div>
            <div
              className='fw-bold px-3 my-2'
              style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
            >
              قیمت دوره
              <i
                className=' p-1 bi bi-cash'
                style={{
                  position: "relative",
                  top: "3px",
                  left: "5px",
                }}
              ></i>
            </div>
          </div>
          <div
            className=' d-flex justify-content-between   align-items-center '
            style={{ background: isDarkMode ? "#d5cfcf" : "#f7f7f7" }}
          >
            <div
              className='fw-bold text-success px-3 my-2'
              style={{ direction: "rtl" }}
            >
              {dataForPage.cost - dataForPage.cost * 0.2} تومان
            </div>
            <div
              className='fw-bold  px-3 my-2'
              style={{ color: isDarkMode ? "#504c4c" : "#6c757d" }}
            >
              <span className='badge badge-pill badge-danger text-danger'>
                20%
              </span>
              با تخفیف
              <i
                className=' p-1 bi bi-cash-coin'
                style={{
                  position: "relative",
                  top: "3px",
                  left: "5px",
                }}
              ></i>
            </div>
          </div>
          <div
            className='fw-bold  my-2 text-center'
            style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
          >
            مهلت استفاده از تخفیف
          </div>
          <div className='text-center py-2 border-top fs-5 fw-bold text-danger'>
            <Countdown date={Date.now() + 2628000000}></Countdown>
          </div>
          <div
            className='text-center fw-bold'
            style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
          >
            ثانیه | دقیقه | ساعت | روز
          </div>
          {cartId.find((cart_id) => cart_id === dataForPage._id) ? (
            <div
              className='btn btn-primary w-100 mt-3'
              style={{ borderRadius: "0 0 11px 11px" }}
            >
              قبلا این دوره اضافه شده است
            </div>
          ) : (
            <button
              onClick={() => addDataToCart(dataForPage)}
              type='button'
              className='btn btn-success w-100 mt-3'
              style={{ borderRadius: "0 0 11px 11px" }}
            >
              اضافه کردن به سبد خرید
            </button>
          )}
        </div>
      </Fade>

      <Fade>
        <div
          className={`shadow  mt-4 ${style.about}`}
          style={{
            direction: "rtl",
            overflow: "hidden",
            background: isDarkMode ? "#3f4a6b" : "none",
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          <p
            className='fw-bold m-0  my-2  fs-5 fw-bold '
            style={{ padding: "7px 12px 0" }}
          >
            مزایای شرکت در این دوره
          </p>
          <div
            className='fw-bold  px-3 my-2 py-2'
            style={{
              background: isDarkMode ? "#d5cfcf" : "#f7f7f7",
              color: isDarkMode ? "#504c4c" : "#6c757d",
            }}
          >
            <i className=' p-1 text-success bi bi-check-lg'></i>
            ارتباط مستقیم با مدرس
          </div>
          <div
            className='fw-bold  px-3 my-2 py-2'
            style={{ color: isDarkMode ? "#e1dfdf" : "#6c757d" }}
          >
            <i className=' p-1 text-success bi bi-check-lg'></i>
            ساخت رزومه مناسب برای بازار کار
          </div>
          <div
            className='fw-bold  px-3 my-2 py-2'
            style={{
              background: isDarkMode ? "#d5cfcf" : "#f7f7f7",
              color: isDarkMode ? "#504c4c" : "#6c757d",
            }}
          >
            <i className=' p-1 text-success bi bi-check-lg'></i>
            معرفی به بهترین شرکت ها
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CoursesDetailsLeft;

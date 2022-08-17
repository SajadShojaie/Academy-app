import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { getItem } from "../../core/Services/Storage/Storage";
import AdminLogin from "../../core/Services/api/AuthenticationApi/AdminLogin";
import LoginStudent from "../../core/Services/api/AuthenticationApi/LoginStudent.api";
import LoadingBtn from "../../components/ButtonComponent/LoadingBtn/LoadingBtn";
import Button from "../../components/ButtonComponent/Button/Button";
import WelecomePageBg from "../../components/common/WelecomePageBg/WelecomePageBg";
import Input from "../../components/common/Input/Input";
import Fade from "react-reveal/Fade";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./LogIn.module.css";

const LogIn = ({ isDarkMode, title, AdminEndPoint, location }) => {
  //for change password input type
  const [inputType, setInputType] = useState({
    password: "password",
    text: "text",
    ispassword: true,
  });
  const handelChange = () => {
    setInputType({ ...inputType, ispassword: !inputType.ispassword });
  };

  //loading
  const [isPending, setisPending] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "*نباید خالی باشد";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*ایمیل نا معتبر است";
    }

    if (!values.password) {
      errors.password = "*نباید خالی باشد";
    }

    return errors;
  };

  //if user register we filing his form
  const newUserData = JSON.parse(getItem("newUser"));

  const formik = useFormik({
    initialValues: {
      email: newUserData ? newUserData.email : "",
      password: newUserData ? newUserData.password : "",
      checkBox: false,
    },
    onSubmit: async (values) => {
      setisPending(true);

      AdminEndPoint
        ? await AdminLogin(AdminEndPoint, values)
        : await LoginStudent(values);

      setisPending(false);
      console.log("values", values);
    },
    validate,
  });

  return (
    <div
      style={{ minHeight: "700px" }}
      className={` d-flex align-items-center ${
        isDarkMode ? style.bg_dark : style.bg_light
      }`}
    >
      <ToastContainer bodyClassName={style.fontTost} />
      <div
        className={`container d-flex justify-content-end m-3 ${style.holder_content}`}
      >
        <WelecomePageBg margin='2em' isDarkMode={isDarkMode}>
          <Fade>
            <div className={` ${style.iconlogin}`}> </div>
          </Fade>
          <Fade>
            <h5 className='text-center mt-2'> {title ? title : "ورود"} </h5>
          </Fade>

          <form onSubmit={formik.handleSubmit}>
            <Fade bottom>
              <div>
                <Input
                  inputType='email'
                  inputText='ایمیل کاربری'
                  name='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor={formik.errors.email ? "#e6bfe5" : "#e6bfe5"}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={style.erorr}>{formik.errors.email}</div>
                ) : null}
              </div>
            </Fade>

            <Fade bottom>
              <div>
                <Input
                  inputType={
                    inputType.ispassword ? inputType.password : inputType.text
                  }
                  inputText='رمز عبور'
                  name='password'
                  id='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor={formik.errors.password ? "#e6bfe5" : "#e6bfe5"}
                />
                <Fade bottom>
                  <span
                    className={`${style.show_password_btn} ${
                      formik.errors.password ? style.fixing_place : null
                    }`}
                    onClick={handelChange}
                  >
                    نمایش
                  </span>
                </Fade>

                {formik.touched.password && formik.errors.password ? (
                  <div className={style.erorr}>{formik.errors.password}</div>
                ) : null}
              </div>
            </Fade>
            <Fade bottom>
              <label className='d-block text-end mt-3' style={{ width: "95%" }}>
                مرا به خاطر بسپارید
                <input
                  type='checkbox'
                  className='mx-1'
                  name='checkBox'
                  value={formik.values.checkBox}
                  onChange={formik.handleChange}
                />
              </label>
            </Fade>

            <Fade bottom>
              {isPending ? (
                <LoadingBtn btnText='لطفا صبر کنید' />
              ) : (
                <Button btnText='ورود' />
              )}
            </Fade>
          </form>

          <Fade bottom>
            <h6 className='text-center mt-3 '>
              <Link to='/ForgetPassword'>فراموشی رمز عبور</Link>
            </h6>
          </Fade>
          <Fade bottom>
            <p className='text-center mt-1 mb-0'>
              برای ثبت نام
              <Link to='/Register'> اینجا </Link>
              کلیک کنید
            </p>
          </Fade>
          {location.pathname === "/log-in" ? (
            <Link to='Admin-log-in' className='text-center d-block m-0'>
              ورود کارمندان
            </Link>
          ) : null}
          <Fade bottom></Fade>
        </WelecomePageBg>
      </div>
    </div>
  );
};

export default LogIn;

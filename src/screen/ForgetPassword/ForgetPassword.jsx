import React, { useState } from "react";
import {Link} from "react-router-dom";
import WelecomePageBg from "../../components/common/WelecomePageBg/WelecomePageBg";
import Input from "../../components/common/Input/Input";
import style from "./ForgetPassword.module.css";
import Fade from "react-reveal/Fade";
import { useFormik } from "formik";
import ForgetPasswordStudent from "../../core/Services/api/AuthenticationApi/ForgetPasswordStudent.api";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBtn from "../../components/ButtonComponent/LoadingBtn/LoadingBtn";
import Button from "../../components/ButtonComponent/Button/Button";

const ForgetPassword = ({ isDarkMode }) => {
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

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      setisPending(true);
      await ForgetPasswordStudent(values);
      setisPending(false);
    },
    validate,
  });

  return (
    <div
      className={` d-flex justify-content-end align-items-center ${
        isDarkMode ? style.bg_dark : style.bg_light
      }`}
    >
      <ToastContainer bodyClassName={style.fontTost} />
      <div
        className={`container d-flex justify-content-end m-3 ${style.holder_content}`}
      >
        <WelecomePageBg margin='2em' isDarkMode={isDarkMode}>
          <div className={` ${style.iconRegister}`}> </div>
          <h5 className='text-center my-2'> فراموشی رمز عبور </h5>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Input
                inputType='email'
                inputText='ایمیل'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                borderColor={formik.errors.email ? "red" : "green"}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={style.erorr}>{formik.errors.email}</div>
              ) : null}
            </div>
            <Fade bottom>
              {isPending ? (
                <LoadingBtn btnText='لطفا صبر کنید' />
              ) : (
                <Button btnText='ادامه' />
              )}
            </Fade>
          </form>

          <Fade bottom>
            <div className='mt-3'>
              <p className={`d-inline ${style.login}`}>
                <Link to='/log-in'>ورود</Link>
              </p>
              <p className={`d-inline  pe-auto m-0`}> | </p>
              <p className={`d-inline  pe-auto ${style.signup}`}>
                <Link to='/Register'>ثبت نام</Link>
              </p>
            </div>
          </Fade>
        </WelecomePageBg>
      </div>
    </div>
  );
};

export default ForgetPassword;

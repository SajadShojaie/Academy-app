import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterStudent from "../../core/Services/api/AuthenticationApi/RegisterStudent.api";
import WelecomePageBg from "../../components/common/WelecomePageBg/WelecomePageBg";
import Input from "../../components/common/Input/Input";
import LoadingBtn from "../../components/ButtonComponent/LoadingBtn/LoadingBtn";
import Button from "../../components/ButtonComponent/Button/Button";
import { Field, Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import style from "./Register.module.css";
//date picker
import MyDatePicker from "../../components/common/DatePickerComponent/DatePickerComponent";

const Register = ({ isDarkMode }) => {
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

    if (!values.fullName) {
      errors.fullName = "*نباید خالی باشد";
    } else if (values.fullName.length > 10) {
      errors.fullName = "*نام کاربری باید کمتر از 10 کارکتر باشد";
    }

    if (!values.email) {
      errors.email = "*نباید خالی باشد";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*ایمیل نا معتبر است";
    }

    if (!values.password) {
      errors.password = "*نباید خالی باشد";
    } else if (values.password.length < 8) {
      errors.password = "رمز عبور ضعیف است";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*نباید خالی باشد";
    } else if (values.phoneNumber.length > 11) {
      errors.phoneNumber = "* شماره تلفن نباید از 11 رقم بیشتر باشد";
    } else if (!new RegExp("^(\\+98|0)?9\\d{9}$").test(values.phoneNumber)) {
      errors.phoneNumber = "*شماره وارد شده نامعتبر است";
    }

    if (!values.birthDate) {
      errors.birthDate = "*نباید خالی باشد";
    }

    if (!values.nationalId) {
      errors.nationalId = "*نباید خالی باشد";
    }

    return errors;
  };

  return (
    <div
      className={` d-flex justify-content-end align-items-center  ${
        isDarkMode ? style.bg_dark : style.bg_light
      }`}
    >
      <ToastContainer bodyClassName={style.fontTost} />

      <div
        className={`container d-flex justify-content-end m-3 ${style.holder_content}`}
      >
        <WelecomePageBg margin='2em' isDarkMode={isDarkMode}>
          <div className={` ${style.iconSignup}`}></div>
          <h5 className='text-center my-2'>ثبت نام</h5>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              phoneNumber: "",
              birthDate: "",
              nationalId: "",
              profile: "future.png",
            }}
            validate={validate}
            onSubmit={async (values) => {
              console.log(values);
              setisPending(true);
              await RegisterStudent(values);
              setisPending(false);
            }}
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => (
              <Form>
                <div>
                  <Input
                    inputType='text'
                    inputText='نام و نام خانوادگی'
                    name='fullName'
                    id='fullName'
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.fullName && errors.fullName ? (
                    <div className={style.erorr}>{errors.fullName}</div>
                  ) : null}
                </div>

                <div>
                  <Input
                    inputType='email'
                    inputText='ایمیل'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email ? (
                    <div className={style.erorr}>{errors.email}</div>
                  ) : null}
                </div>

                <div className='position-relative'>
                  <Input
                    inputType={
                      inputType.ispassword ? inputType.password : inputType.text
                    }
                    inputText='رمز عبور'
                    name='password'
                    id='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Fade bottom>
                    <span
                      className={`${style.show_password_btn} ${
                        errors.password ? style.fixing_place : null
                      }`}
                      onClick={handelChange}
                    >
                      نمایش
                    </span>
                  </Fade>

                  {touched.password && errors.password ? (
                    <div className={style.erorr}>{errors.password}</div>
                  ) : null}
                </div>

                <div>
                  <Input
                    inputType='text'
                    inputText='شماره ی موبایل'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <div className={style.erorr}>{errors.phoneNumber}</div>
                  ) : null}
                </div>

                <div style={{ margin: "10px" }}>
                  <Field>
                    {() => (
                      <MyDatePicker
                        name='birthDate'
                        placeholder='تاریخ تولد'
                        setFieldValue={setFieldValue}
                      />
                    )}
                  </Field>
                  {touched.birthDate && errors.birthDate ? (
                    <div className={style.erorr}>{errors.birthDate}</div>
                  ) : null}
                </div>

                <div>
                  <Input
                    inputType='text'
                    inputText='کدملی'
                    name='nationalId'
                    id='nationalId'
                    value={values.nationalId}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.nationalId && errors.nationalId ? (
                    <div className={style.erorr}>{errors.nationalId}</div>
                  ) : null}
                </div>

                <Fade bottom>
                  {isPending ? (
                    <LoadingBtn btnText='لطفا صبر کنید' />
                  ) : (
                    <Button btnText='ثبت نام' />
                  )}
                </Fade>

                <Fade bottom>
                  <p className={`text-center`}>
                    <Link to='/log-in'>ورود به حساب کاربری</Link>
                  </p>
                </Fade>
              </Form>
            )}
          </Formik>
        </WelecomePageBg>
      </div>
    </div>
  );
};
export default Register;

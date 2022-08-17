import React, { useState } from "react";
import { getItem } from "../../../core/Services/Storage/Storage";
import { DarkcontextConsumer } from "../../../core/utils/context/Darkcontext";
import { useFormik } from "formik";
import Input from "../Input/Input";
import LoadingBtn from "../../ButtonComponent/LoadingBtn/LoadingBtn";
import Button from "../../ButtonComponent/Button/Button";
import ContactUsStudent from "../../../core/Services/api/ContactusApi/ContactUsStudent.api.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  //for loading
  const [ispending, setIspending] = useState(false);

  //defult value  for input
  const studentModele = JSON.parse(getItem("studentModle"));

  //validation
  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "*نباید خالی باشد";
    }

    if (!values.email) {
      errors.email = "*نباید خالی باشد";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*ایمیل نا معتبر است";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*نباید خالی باشد";
    } else if (values.phoneNumber.length > 11) {
      errors.phoneNumber = "* شماره تلفن نباید از 11 رقم بیشتر باشد";
    } else if (!new RegExp("^(\\+98|0)?9\\d{9}$").test(values.phoneNumber)) {
      errors.phoneNumber = "*شماره وارد شده نامعتبر است";
    }

    if (!values.commentText) {
      errors.commentText = "*نباید خالی باشد";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      fullName: studentModele ? studentModele.fullName : "",
      email: studentModele ? studentModele.email : "",
      phoneNumber: studentModele ? studentModele.phoneNumber : "",
      commentText: "",
    },
    validate,
    onSubmit: async (values) => {
      //loading
      setIspending(true);

      //call api
      await ContactUsStudent(values);

      //loading
      setTimeout(() => {
        setIspending(false);
      }, 500);

      //clear filde
      formik.values.commentText = "";
      console.log(values);
    },
  });
  return (
    <DarkcontextConsumer>
      {(isDarkMode) => {
        return (
          <div
            className={`shadow ${style.main} ${
              isDarkMode ? style.dark : style.light
            }`}
          >
            <ToastContainer bodyClassName={style.fontTost} />
            <Fade bottom>
              <p className={`fw-bold fs-5 text-center my-4`}>تماس با ما</p>
            </Fade>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <Input
                  inputType='text'
                  inputText='نام و نام خانوادگی'
                  name='fullName'
                  id='fullName'
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor={formik.errors.fullName ? "red" : "green"}
                />

                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className={style.erorr}>{formik.errors.fullName}</div>
                ) : null}
              </div>

              <div>
                <Input
                  inputType='email'
                  inputText='ایمیل'
                  name='email'
                  id='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor={formik.errors.email ? "red" : "green"}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className={style.erorr}>{formik.errors.email}</div>
                ) : null}
              </div>

              <div>
                <Input
                  inputType='text'
                  inputText='شماره ی موبایل'
                  name='phoneNumber'
                  id='phoneNumber'
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor={formik.errors.phoneNumber ? "red" : "green"}
                />

                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className={style.erorr}>{formik.errors.phoneNumber}</div>
                ) : null}
              </div>

              <Fade bottom>
                <div>
                  <textarea
                    className={`${style.text_area} ${
                      isDarkMode ? style.text_area_dark : style.text_area_light
                    }`}
                    name='commentText'
                    id='commentText'
                    value={formik.values.commentText}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='متن پیام'
                  />

                  {formik.touched.commentText && formik.errors.commentText ? (
                    <div className={style.erorr}>
                      {formik.errors.commentText}
                    </div>
                  ) : null}
                </div>
              </Fade>
              <Fade bottom>
                {ispending ? (
                  <LoadingBtn btnText='در حال ارسال' />
                ) : (
                  <Button btnText='ارسال پیام' />
                )}
              </Fade>
            </form>
          </div>
        );
      }}
    </DarkcontextConsumer>
  );
};

export default ContactForm;

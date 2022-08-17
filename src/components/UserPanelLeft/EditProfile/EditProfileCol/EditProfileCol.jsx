import React from "react";
import { Field, Form, Formik } from "formik";
import UpdateApi from "../../../../core/Services/api/UpdateApi/UpdateApi";
import { setItem } from "../../../../core/Services/Storage/Storage";
import { useUserInfo } from "../../../../core/utils/context/UserInformation.context";
import { Fade } from "react-reveal";
import style from "./EditProfileCol.module.css";

const EditProfileCol = () => {
  //get user info from context
  const { data: studentModle, setdata, profile, setProfile } = useUserInfo();
  //validation
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

    if (!values.birthDate) {
      errors.birthDate = "*نباید خالی باشد";
    }
    if (!values.nationalId) {
      errors.nationalId = "*نباید خالی باشد";
    } else if (values.nationalId.length > 10) {
      errors.nationalId = "*کد ملی نباید از 10 رقم بیشتر باشد";
    } else if (values.nationalId.length < 5) {
      errors.nationalId = "*کد ملی نباید از 5 رقم کمتر باشد";
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = "*نباید خالی باشد";
    } else if (values.phoneNumber.length > 11) {
      errors.phoneNumber = "* شماره تلفن نباید از 11 رقم بیشتر باشد";
    } else if (!new RegExp("^(\\+98|0)?9\\d{9}$").test(values.phoneNumber)) {
      errors.phoneNumber = "*شماره وارد شده نامعتبر است";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        fullName: studentModle ? studentModle.fullName : "",
        email: studentModle ? studentModle.email : "",
        birthDate: studentModle ? studentModle.birthDate : "",
        nationalId: studentModle ? studentModle.nationalId : "",
        phoneNumber: studentModle ? studentModle.phoneNumber : "",
        role: studentModle.role,
        profile: profile,
      }}
      validate={validate}
      onSubmit={async (values) => {
        // update with backend endpoint
        const update = await UpdateApi(
          `http://localhost:5000/api/student/${studentModle._id}`,
          {
            fullName: values.fullName,
            email: values.email,
            birthDate: values.birthDate,
            nationalId: values.nationalId,
            phoneNumber: values.phoneNumber,
          }
        );

        // update context
        setdata({ ...values, _id: studentModle._id });
        setProfile(values.profile);

        // update the localstorage
        if (update.status === 200) {
          studentModle.fullName = values.fullName;
          studentModle.email = values.email;
          studentModle.birthDate = values.birthDate;
          studentModle.nationalId = values.nationalId;
          studentModle.phoneNumber = values.phoneNumber;

          //send to localstorage
          setItem("studentModle", JSON.stringify(studentModle));
          setItem("profile", values.profile);
        }
      }}
    >
      {({ setFieldValue, dirty, touched, errors, values, resetForm }) => (
        <Form>
          <Fade>
            <div className='d-flex justify-content-center align-items-center'>
              <div className={` ${style.cover_img}`}>
                <img
                  src={require(`../../../../assets/image/user-panel/All-courses/${values.profile}`)}
                  alt=''
                  className={style.profile_img}
                />
              </div>

              <Field
                type='file'
                accept='PNG , jpg , svg'
                name='profile'
                id='profile'
                style={{ display: "none" }}
                value=''
                onChange={(e) => {
                  setFieldValue("profile", e.target.files[0].name);
                }}
              />
              <label htmlFor='profile' className='btn btn-primary mx-2 mt-4'>
                آپلود عکس
              </label>
            </div>

            <div className={`mt-3 ${style.content_bg}`}>
              <div className={style.cover}>
                <span className='m-0 fw-bold'>نام کاربری</span>
                {touched.fullName && errors.fullName ? (
                  <span className={style.erorr}>{errors.fullName}</span>
                ) : null}

                <Field
                  type='text'
                  name='fullName'
                  id='fullName'
                  className={`mt-2 text-muted ${style.input}`}
                  style={{ marginRight: "-4px" }}
                />
              </div>

              <div className={style.cover}>
                <span className='m-0 fw-bold'> ایمیل</span>

                {touched.email && errors.email ? (
                  <span className={style.erorr}>{errors.email}</span>
                ) : null}

                <Field
                  type='text'
                  name='email'
                  id='email'
                  className={`mt-2 text-muted ${style.input}`}
                  style={{ marginRight: "-4px" }}
                />
              </div>

              <div className={style.cover}>
                <span className='m-0 fw-bold'>تاریخ تولد</span>

                {touched.birthDate && errors.birthDate ? (
                  <span className={style.erorr}>{errors.birthDate}</span>
                ) : null}

                <Field
                  type='text'
                  name='birthDate'
                  id='birthDate'
                  className={`mt-2 text-muted ${style.input}`}
                  style={{ marginRight: "-4px" }}
                />
              </div>

              <div className={style.cover}>
                <span className='m-0 fw-bold'>کدملی</span>

                {touched.nationalId && errors.nationalId ? (
                  <span className={style.erorr}>{errors.nationalId}</span>
                ) : null}

                <Field
                  type='text'
                  name='nationalId'
                  id='nationalId'
                  className={`mt-2 text-muted ${style.input}`}
                  style={{ marginRight: "-4px" }}
                />
              </div>

              <div className={style.cover}>
                <span className='m-0 fw-bold'>شماره همراه</span>

                {touched.phoneNumber && errors.phoneNumber ? (
                  <span className={style.erorr}>{errors.phoneNumber}</span>
                ) : null}

                <Field
                  type='text'
                  name='phoneNumber'
                  id='phoneNumber'
                  className={`mt-2 text-muted ${style.input}`}
                  style={{ marginRight: "-4px" }}
                />
              </div>

              <div className={style.cover}>
                <p className='m-0 fw-bold'> نقش</p>

                <Field
                  type='text'
                  name='role'
                  id='role'
                  className={`mt-2 text-muted ${style.input}`}
                  style={{ marginRight: "-4px", cursor: "not-allowed" }}
                  disabled
                />
              </div>

              <div className='mx-auto w-50'>
                <button
                  type='button'
                  className='btn btn-danger mx-4 mt-4'
                  style={{ padding: "6px 22px" }}
                  onClick={resetForm}
                  disabled={!dirty}
                >
                  لغو تغییرات
                </button>
                <button
                  type='submit'
                  className='btn btn-success mx-2 mt-4'
                  disabled={!dirty}
                >
                  ذخیره تغییرات
                </button>
              </div>
            </div>
          </Fade>
        </Form>
      )}
    </Formik>
  );
};

export default EditProfileCol;

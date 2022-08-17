import React from "react";
import WelecomePageBg from "./../../common/WelecomePageBg/WelecomePageBg";
import ButtonForm from "./../../common/ButtonForm/ButtonForm";
import style from "./Phishkhan.module.css";
import { Fade } from "react-reveal";

const Phishkhan = ({ Datas }) => {
  return (
    <div className={`align-item-center mt-5 ${style.cover}`}>
      <div className={`${style.div_responsive}`}>
        <WelecomePageBg margin='0' padding='16px'>
          <p className='fw-bold mt-1 fs-6 text-center'> اخرین خریداری شده </p>
          <div
            className='border rounded d-flex justify-content-around  '
            style={{ padding: " 2em 0px" }}
          >
            <div className='w-50' style={{ direction: "rtl" }}>
              <p className='fw-bold'> دوره آموزش جامع انگولار </p>
              <p> مدرس :مهندس ولیزاده </p>
              <p className='text-danger'>مبلغ : 2000000 تومان </p>
            </div>
            <div>
              <img
                className={`${style.img_fix}`}
                src={require(`../../../assets/image/blog/01.PNG`)}
                alt=''
              />
            </div>
          </div>
        </WelecomePageBg>

        <WelecomePageBg margin='2em 0' padding='16px'>
          <p className='fw-bold  fs-6 text-center'> دوره منتخب </p>
          <div
            className='border rounded d-flex justify-content-around  '
            style={{ padding: " 2em 0px" }}
          >
            <div className='w-50' style={{ direction: "rtl" }}>
              <p className='fw-bold'> دوره آموزش نود جی اس </p>
              <p> مدرس :مهندس ولیزاده </p>
              <p className='text-danger'>مبلغ : 1500000 تومان </p>
            </div>
            <div>
              <img
                className={`${style.img_fix}`}
                src={require(`../../../assets/image/blog/02.PNG`)}
                alt=''
              />
            </div>
          </div>
        </WelecomePageBg>
      </div>
      <div>
        <div className={` shadow ${style.about_respo}`}>
          <p className='fw-bold mt-1 fs-6 text-center'> اطلاعات حساب کاربری </p>
          <Fade>
            <div>
              {Datas.map((data) => (
                <p
                  className='m-0 p-0 p-3 px-2 text-end fw-bold'
                  key={data.title}
                >
                  <span className='px-2 text-muted'>{data.des} </span> :{" "}
                  {data.title}
                </p>
              ))}
            </div>
          </Fade>

          <ButtonForm ButtonText='ویرایش ' url='/user-panel/edit-profile' />
        </div>
      </div>
    </div>
  );
};

export default Phishkhan;

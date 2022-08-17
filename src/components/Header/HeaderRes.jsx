import React from "react";
import {Link} from "react-router-dom";
import style from "./HeaderRes.module.css";

const HeaderRes = ({ datas, Menu, handelShowResMenu }) => {
  return (
    <>
      {Menu ? (
        <>
          <div className={style.bg_closer} onClick={handelShowResMenu}></div>
          <div className={`${style.coverRes}`}>
            <div className={style.header_for_sign}>
              Future Academy
              <i
                className='bi bi-x-lg text-danger fs-3'
                onClick={handelShowResMenu}
              ></i>
            </div>
            <ul className={style.list}>
              {datas.map((data) => (
                <li key={data.name}>
                  <i
                    className='bi bi-check-square'
                    style={{ marginRight: "10px" }}
                  ></i>
                  <Link to={data.path} onClick={handelShowResMenu}>
                    {data.name}
                  </Link>

                  <i
                    className='bi bi-caret-right-fill'
                    style={{ float: "right" }}
                  ></i>
                </li>
              ))}
            </ul>
            <div className={style.bottom_menu}>
              <i className='bi bi-house-fill'></i>
              <i className='bi bi-telephone-plus-fill'></i>
              <i className='bi bi-basket'></i>
              <i className='bi bi-person-circle'></i>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default HeaderRes;

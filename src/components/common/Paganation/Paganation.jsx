import React from "react";
import {Link} from "react-router-dom";
import _ from "lodash";
import style from "./Paganation.module.css";

const Paganation = ({
  pageSize,
  totalData,
  curentPage,
  handelChanger,
  handelLeft,
  handelRight,
  isDarkMode
}) => {
  //
  const pageCount = Math.ceil(totalData / pageSize);
  const numbersPage = _.range(1, pageCount + 1);

  return (
    <div className={`${style.cover}`}>
      {pageCount > 1 && (
        <nav aria-label='Page navigation example'>
          <ul className='pagination'>
            <li
              className={`page-item ${curentPage <= 1 ? "disabled" : ""}`}
              onClick={handelLeft}
            >
              <Link className='page-link' to='#' aria-label='Previous'>
                <span aria-hidden='true'>&laquo;</span>
              </Link>
            </li>
            {numbersPage.map((page) => (
              <li
                key={page}
                className={`page-item ${curentPage === page && "active"}`}
                style={{ cursor: "pointer" }}
                onClick={() => handelChanger(page)}
              >
                <Link className='page-link' to='#'>
                  {page}
                </Link>
              </li>
            ))}

            <li
              className={`page-item ${
                curentPage < pageCount ? "" : "disabled"
              }`}
              onClick={handelRight}
            >
              <Link className='page-link' to='#' aria-label='Next'>
                <span aria-hidden='true'
                >
                  &raquo;
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Paganation;

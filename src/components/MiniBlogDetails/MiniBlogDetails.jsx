import React from "react";
import style from "./MiniBlogDetails.module.css";
const MiniBlogDetails = ({ data }) => {
  return (
    <div
      className={` d-flex justify-content-around align-items-center my-2 mt-4 px-3 ${style.MiniBlogDetails}`}
    >
      <div style={{ marginLeft: "9px" }}>
        <p className='m-0 text-end fw-bold fs-6 p-2'>{data.title}</p>
        <p
          className='m-0 px-2 text-muted'
          style={{ direction: "rtl", fontSize: "13px" }}
        >
          {data.text}
        </p>
      </div>

      <img
        src={require(`../../assets/image/MiniBlogDetails/${data.image}`)}
        style={{
          borderRadius: "9px",
          width: "30%",
          minWidth: "105px",
          minHeight: "68px",
        }}
        alt=''
      />
    </div>
  );
};

export default MiniBlogDetails;

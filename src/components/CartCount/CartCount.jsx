import React from "react";
import style from "./CartCount.module.css";

const CartCount = ({ cart, handelpayment }) => {
  //calculate the cost
  if (cart.length > 0) {
    let costs = cart.map((e) => e.cost);
    var calculated = costs.reduce((pre, cur) => pre + cur);
    // throw new Error();
  }

  return (
    <div
      className=' py-3'
      style={{ direction: "rtl", background: "#f5f5f5", borderRadius: "15px" }}
    >
      <div className='fw-bold px-5 text-center'>جمع کل سبد خرید </div>

      <div
        className={`d-flex  align-items-center fw-bold  mx-3  ${style.price} `}
      >
        <div className=' my-2'>قیمت کل :</div>
        <div className=' my-2 mx-2 text-danger'>
          <del>
            {cart.length > 0 && calculated}
            تومان
          </del>
        </div>
      </div>
      <div
        className={`d-flex align-items-center fw-bold  mx-3  ${style.price} `}
      >
        <div className='my-2 '> با تخفیف :</div>
        <div className='my-2 mx-2 text-success'>
          {calculated - calculated * 0.2} تومان
        </div>
      </div>
      <button
        onClick={handelpayment}
        type='button'
        className={`btn btn-success fw-bold d-block w-50 mx-auto mt-3`}
      >
        ادامه جهت تسویه حساب
      </button>
    </div>
  );
};

export default CartCount;

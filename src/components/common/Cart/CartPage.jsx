import React from "react";
import UserPanelTable from "../../UserPanelTable/UserPanelTable";
import CartCount from "../../CartCount/CartCount";
import style from "./CartPage.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = ({ cart, handelpayment, handelDelete, location }) => {
  return (
    <div className={`${style.cover}`}>
      <ToastContainer bodyClassName={style.fontTost} />
      <div className={style.title}>سبد خرید</div>
      <div className={` w-75 mx-auto mt-3 ${style.card_cover}`}>
        <UserPanelTable
          Datas={cart}
          handelDelete={handelDelete}
          location={location}
          icon={"bi-trash"}
          popUpText={"می خواهید این دوره را از سبد حذف کنید؟"}
          titleText='تعداد محصولات سبد : '
        />
        {cart.length > 0 && (
          <CartCount cart={cart} handelpayment={handelpayment} />
        )}
      </div>
    </div>
  );
};

export default CartPage;

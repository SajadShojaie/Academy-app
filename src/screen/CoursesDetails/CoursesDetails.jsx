import React from "react";
import BlogDetailsRight from "../../components/BlogDetailsRight/BlogDetailsRight";
import CoursesDetailsLeft from "../../components/common/CoursesDetailsLeft/CoursesDetailsLeft";
import style from "./CoursesDetails.module.css";
const CoursesDetails = ({
  location,
  addDataToCart,
  cart,
  cartId,
  btncheck,
isDarkMode
}) => {
  const dataForPage = location.state;
  return (
    <div className={` d-flex  mt-5 ${style.cover}`}>
      <CoursesDetailsLeft
        dataForPage={dataForPage}
        addDataToCart={addDataToCart}
        cart={cart}
        cartId={cartId}
        btncheck={btncheck}
        isDarkMode={isDarkMode}
      />
      <BlogDetailsRight
        page='CoursesDetails'
        commentpage='CoursesDetails'
        imgUrl='CoursesDetails'
        dataForPage={dataForPage}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default CoursesDetails;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import Landing from "../../screen/Landing/Landing";
import Blogs from "../../screen/Blogs/Blogs";
import Courses from "../../screen/Courses/Courses";
import ContactUS from "../../screen/ContactUS/ContactUS";
import UserPanel from "../../screen/UserPanel/UserPanel";
import BlogsDetails from "../../screen/BlogsDetails/BlogDetails";
import CoursesDetails from "../../screen/CoursesDetails/CoursesDetails";
import Logout from "../../screen/Logout/Logout";
import CartPage from "../../components/common/Cart/CartPage";
import OnlineChat from "../../screen/OnlineChat/OnlineChat";
import NotFound from "../../screen/NotFound/NotFound";
// import Footer from "../../components/Footer/Footer";
import style from "../App.module.css";

const Authenticated = ({
  isDarkMode,
  setIsDarkMode,
  handelSearch,
  searchInput,
  setSearchInput,
  cart,
  cartId,
  addDataToCart,
  handelpayment,
  CoursesIspending,
  handelDelete,
  handelAddToMyCourses,
}) => {
  return (
    <>
      <Route
        render={(props) => (
          <Header
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            handelSearch={handelSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            cart={cart}
            {...props}
          />
        )}
      />

      <div className={style.pos}>
        <Switch>
          <Route
            path='/shopping-cart'
            render={(props) => (
              <CartPage
                cart={cart}
                handelDelete={handelDelete}
                handelpayment={handelpayment}
                {...props}
              />
            )}
          />
          <Route path='/logout' component={Logout} />
          <Route
            path='/user-panel'
            render={(props) => (
              <UserPanel
                cart={cart}
                handelDelete={handelDelete}
                handelAddToMyCourses={handelAddToMyCourses}
                {...props}
              />
            )}
          />
          <Route
            path='/contact-us'
            render={(props) => <ContactUS isDarkMode={isDarkMode} {...props} />}
          />
          <Route
            path='/CoursesDetails/:id'
            render={(props) => (
              <CoursesDetails
                addDataToCart={addDataToCart}
                cart={cart}
                cartId={cartId}
                {...props}
                isDarkMode={isDarkMode}
              />
            )}
          />
          <Route path='/BlogsDetails/:id' component={BlogsDetails} />
          <Route
            path='/blogs'
            exact
            render={(props) => <Blogs isDarkMode={isDarkMode} {...props} />}
          />
          <Route
            path='/courses'
            render={(props) => (
              <Courses
                handelSearch={handelSearch()}
                CoursesIspending={CoursesIspending}
                {...props}
                isDarkMode={isDarkMode}
              />
            )}
          />
          <Route path='/not-found' component={NotFound} />
          <Route
            path='/'
            exact
            component={(props) => (
              <Landing isDarkMode={isDarkMode} {...props} />
            )}
          />
          <Redirect to='/not-found' />
        </Switch>

        <Route component={OnlineChat} />
      </div>
    </>
  );
};

export default Authenticated;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";
import Landing from "../../screen/Landing/Landing";
import Blogs from "../../screen/Blogs/Blogs";
import Courses from "../../screen/Courses/Courses";
import ContactUS from "../../screen/ContactUS/ContactUS";
import UserPanel from "../../screen/UserPanel/UserPanel";
import Register from "../../screen/Register/Register";
import Login from "../../screen/LogIn/LogIn";
import ForgetPassword from "../../screen/ForgetPassword/ForgetPassword";
import BlogsDetails from "../../screen/BlogsDetails/BlogDetails";
import CoursesDetails from "../../screen/CoursesDetails/CoursesDetails";
import CartPage from "../../components/common/Cart/CartPage";
import NotFound from "../../screen/NotFound/NotFound";
// import Footer from "../../components/Footer/Footer";
import style from "../App.module.css";
import { UserConsumer } from "../../core/utils/context/UserContext";
import AdminLogin from "../../screen/LogIn/AdminLogin";

const UnAuthenticated = ({
  isDarkMode,
  setIsDarkMode,
  handelSearch,
  searchInput,
  setSearchInput,
  cart,
  cartId,
  addDataToCart,
  btncheck,
  CoursesIspending,
  handelDelete,
}) => {
  return (
    <UserConsumer>
      {(userSituation) => {
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
                      {...props}
                    />
                  )}
                />
                <Route
                  path='/Register'
                  render={(props) => (
                    <Register isDarkMode={isDarkMode} {...props} />
                  )}
                />

                <Route
                  path='/Admin-log-in'
                  render={(props) => (
                    <AdminLogin isDarkMode={isDarkMode} {...props} />
                  )}
                />

                <Route
                  path='/log-in'
                  render={(props) => (
                    <Login isDarkMode={isDarkMode} {...props} />
                  )}
                />
                <Route
                  path='/ForgetPassword'
                  render={(props) => (
                    <ForgetPassword isDarkMode={isDarkMode} {...props} />
                  )}
                />
                <Route
                  path='/user-panel'
                  render={
                    userSituation
                      ? (props) => (
                          <UserPanel
                            cart={cart}
                            handelDelete={handelDelete}
                            {...props}
                          />
                        )
                      : (props) => <Redirect to='/log-in' {...props} />
                  }
                />
                <Route path='/contact-us' component={ContactUS} />
                <Route
                  path='/CoursesDetails/:id'
                  render={(props) => (
                    <CoursesDetails
                      addDataToCart={addDataToCart}
                      cart={cart}
                      cartId={cartId}
                      btncheck={btncheck}
                      {...props}
                      isDarkMode={isDarkMode}

                    />
                  )}
                />
                <Route path='/BlogsDetails/:id' component={BlogsDetails} />
                <Route
                  path='/blogs'
                  exact
                  render={(props) => (
                    <Blogs isDarkMode={isDarkMode} {...props} />
                  )}
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
            </div>
          </>
        );
      }}
    </UserConsumer>
  );
};

export default UnAuthenticated;

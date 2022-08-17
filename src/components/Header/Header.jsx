import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { UserConsumer } from "../../core/utils/context/UserContext";
import { SessionLogedConsumer } from "../../core/utils/context/SessionLoged";
import HeaderRes from "./HeaderRes";
import style from "./Header.module.css";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  handelSearch,
  searchInput,
  setSearchInput,
  history,
  cart,
}) => {
  const Nav = [
    { path: "/", name: "خانه" },
    { path: "/courses", name: "آموزش" },
    { path: "/user-panel", name: "مالی" },
    { path: "/blogs", name: "خدمات" },
    { path: "/contact-us", name: "تماس با ما" },
  ];

  //responsive show menu
  const [Menu, setMenu] = useState(false);

  const handelShowResMenu = () => {
    setMenu(!Menu);
  };
  const handelClose = () => {
    setMenu(!Menu);
  };

  const handelRedirect = () => {
    history.push("/courses");
  };

  return (
    <UserConsumer>
      {(userSituation) => {
        return (
          <SessionLogedConsumer>
            {(sessionLoged) => {
              return (
                <>
                  <div
                    className={`container-fluid d-flex justify-content-between 
                    align-items-center position-fixed w-100 ${style.header}`}
                  >
                    <ul className={`${style.responsive_icon}`}>
                      <li className='nav-item'>
                        <i
                          className={`bi bi-list fs-1 ${style.fixed_pos_icon}`}
                          onClick={handelShowResMenu}
                        ></i>
                      </li>
                    </ul>

                    <ul className={`nav fw-bold ${style.responsive_list}`}>
                      <li className='nav-item'>
                        <NavLink to='/'>
                          <img
                            src={require("../../assets/image/Header/avatar-1.png")}
                            alt='logo-of-site'
                            className={style.logo_img}
                          />
                        </NavLink>
                      </li>
                      {Nav.map((item) => (
                        <li className='nav-item' key={item.path}>
                          <NavLink
                            className={`nav-link p-2 ${style.nav_color}`}
                            to={item.path}
                            activeClassName={`${style.active_right_link}`}
                            exact={true}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>

                    <ul className={`nav ${style.left_nav}`}>
                      <li>
                        <input
                          type='text'
                          className={style.search_input}
                          placeholder='جستجوی دوره ها...'
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                          onClick={handelRedirect}
                        />
                        <i
                          className={`bi bi-search fs-5 ${style.fixed_pos_icon}`}
                          onClick={() => handelSearch}
                        ></i>
                      </li>
                      <li className={style.responsive_list}>
                        <DarkModeToggle
                          onChange={setIsDarkMode}
                          checked={isDarkMode}
                          size={70}
                        />
                      </li>

                      {userSituation ? (
                        <NavLink
                          to='/user-panel'
                          activeClassName={`${style.active_left_link}`}
                          exact={true}
                        >
                          <li
                            className={style.responsive_list}
                            style={{ padding: "5px 14px" }}
                          >
                            پروفایل
                          </li>
                        </NavLink>
                      ) : (
                        <NavLink
                          to='/Register'
                          activeClassName={`${style.active_left_link}`}
                          exact={true}
                        >
                          <li
                            className={style.responsive_list}
                            style={{ padding: "5px 14px" }}
                          >
                            ثبت نام
                          </li>
                        </NavLink>
                      )}
                      {userSituation || sessionLoged ? (
                        <NavLink
                          to='/logout'
                          activeClassName={`${style.active_left_link}`}
                          exact={true}
                        >
                          <li
                            className={style.responsive_list}
                            style={{ padding: "5px 14px" }}
                          >
                            خروج
                          </li>
                        </NavLink>
                      ) : (
                        <NavLink
                          to='/log-in'
                          className={style.responsive_list}
                          activeClassName={`${style.active_left_link}`}
                          exact={true}
                        >
                          <li style={{ padding: "5px 14px" }}>ورود</li>
                        </NavLink>
                      )}

                      <NavLink to={{ pathname: "/shopping-cart", state: cart }}>
                        <li
                          className='position-relative'
                          style={{ padding: "2px 20px" }}
                        >
                          <span
                            className='position-absolute start-100 translate-middle badge rounded-pill bg-danger'
                            style={{ top: "20%" }}
                          >
                            {cart.length}
                          </span>
                          <i
                            className={`bi bi-cart2 fs-5 ${style.fixed_pos_icon}`}
                          ></i>
                        </li>
                      </NavLink>
                    </ul>
                  </div>

                  <HeaderRes
                    datas={Nav}
                    Menu={Menu}
                    handelShowResMenu={handelShowResMenu}
                  />
                </>
              );
            }}
          </SessionLogedConsumer>
        );
      }}
    </UserConsumer>
  );
};

export default Header;

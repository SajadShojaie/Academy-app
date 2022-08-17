import React, { useEffect, useState } from "react";
import Authenticated from "./Authenticated/Authenticated";
import UnAuthenticated from "./UnAuthenticated/UnAuthenticated";
import { getItem } from "../core/Services/Storage/Storage";
import GetApi from "../core/Services/api/GetApi/GetApi";
import Http from "../core/Services/interceptor/interceptor";
import { UserProvider } from "../core/utils/context/UserContext";
import { ErrorBoundary } from "react-error-boundary";
import { SessionLogedProvider } from "../core/utils/context/SessionLoged";
import { DarkcontextProvider } from "../core/utils/context/Darkcontext";
import loading from "../assets/image/loading/Loading.gif";
import Error from "../components/common/Error/Error";
import style from "./App.module.css";
import { toast } from "react-toastify";

const App = () => {
  //user login sitation

  //for local storage
  const localStorageIsLogged = getItem("UserToken");
  const [localStorageLoged] = useState(localStorageIsLogged ? true : false);

  //for session storage
  const sessionIsLogged = sessionStorage.getItem("UserToken");
  const [sessionLoged] = useState(sessionIsLogged ? true : false);

  //main loading sniper
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 1000);
  }, []);

  //dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  //for search
  const [searchInput, setSearchInput] = useState("");

  const [CorsesData, setCorsesData] = useState([]);
  const [CoursesIspending, setCoursesIspending] = useState(true);

  // if(user is logged and delete use effect)

  useEffect(() => {
    const getter = async () => {
      const res = await GetApi("http://localhost:5000/api/course/getall");
      setCorsesData(res);
      setTimeout(() => {
        setCoursesIspending(false);
      }, 2000);
    };

    getter();
  }, []);

  const handelSearch = () => {
    if (searchInput.length > 0) {
      return CorsesData.filter(
        (data) =>
          data.title.toLowerCase().match(searchInput) ||
          data.lesson.description.match(searchInput) ||
          data.teacher.fullName.match(searchInput)
      );
    } else {
      return CorsesData;
    }
  };

  //for shopping cart
  const [cart, setCart] = useState([]);
  const [cartId, setcartId] = useState([]);

  const studentModle = getItem("studentModle");
  const userId = JSON.parse(studentModle)._id;

  useEffect(() => {
    const getter = async () => {
      const res = await Http.get(`http://localhost:5000/api/student/${userId}`);
      setcartId(res.data.result.courses.map((data) => data._id));
    };
    getter();
  }, []);

  const addDataToCart = (product) => {
    setCart([...cart, product]);
    setcartId([...cartId, product._id]);
  };

  const handelDelete = (product) => {
    setCart(cart.filter((m) => m !== product));
    setcartId(cartId.filter((m) => m !== product._id));
  };

  //add new item to all courses page to cart page
  const handelAddToMyCourses = (product) => {
    setCart([...cart, product]);
  };

  //payment
  const handelpayment = async () => {
    try {
      cart.forEach(async (item) => {
        await Http.post(
          `http://localhost:5000/api/course/addStudentToCourse/${userId}`,
          { courseId: item._id }
        );
      });

      setCart([]);
      setcartId([]);

      toast.success("با موفقیت به دوره های شما اضافه شد");
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        (error.response.status >= 400 || error.response.status <= 500)
      ) {
        toast.error(error.response.data.message[0].message);
      }
    }
  };

  return (
    <ErrorBoundary FallbackComponent={Error}>
      {isPending ? (
        <div className='text-center mt-5'>
          <img src={loading} alt='loading' />
        </div>
      ) : (
        <UserProvider value={sessionLoged || localStorageLoged}>
          <SessionLogedProvider value={sessionLoged}>
            <DarkcontextProvider value={isDarkMode}>
              <div
                className={`${style.cover} ${
                  isDarkMode ? style.dark_mode : style.light_mode
                }`}
              >
                {localStorageLoged || sessionLoged ? (
                  <Authenticated
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    handelSearch={handelSearch}
                    CoursesIspending={CoursesIspending}
                    cart={cart}
                    cartId={cartId}
                    handelpayment={handelpayment}
                    addDataToCart={addDataToCart}
                    handelDelete={handelDelete}
                    handelAddToMyCourses={handelAddToMyCourses}
                  />
                ) : (
                  <UnAuthenticated
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    handelSearch={handelSearch}
                    CoursesIspending={CoursesIspending}
                    cart={cart}
                    cartId={cartId}
                    addDataToCart={addDataToCart}
                    handelDelete={handelDelete}
                    handelAddToMyCourses={handelAddToMyCourses}
                  />
                )}
              </div>
            </DarkcontextProvider>
          </SessionLogedProvider>
        </UserProvider>
      )}
    </ErrorBoundary>
  );
};

export default App;

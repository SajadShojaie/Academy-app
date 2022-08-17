import axios from "axios";
import { toast } from "react-toastify";
// const MainUrl = process.env.Academy_Endpoint;
import { setItem } from "../../Storage/Storage";

const LoginStudent = async (obj) => {
  try {
    //call api
    const result = await axios.post("http://localhost:5000/api/auth/login", {
      email: obj.email,
      password: obj.password,
    });
    console.log(result.data);

    //call toastify
    toast.success(result.data.message[0].message);

    //save on local storage
    if (obj.checkBox) {
      setItem("UserToken", result.data.result.jwtToken);
    } else {
      sessionStorage.setItem("UserToken", result.data.result.jwtToken);
    }
    //save basic img in localstorage
    setItem("profile", "profile.PNG");

    //save userData in local storage
    const studentModel = result.data.result.studentModel;
    setItem("studentModle", JSON.stringify(studentModel));

    // redirect user to home page if its vallide

    setTimeout(() => {
      window.location = "/";
    }, 2000);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message.message[0].message);
    } else {
      toast.error(error.response.data.message.message[0].message);
    }
    console.log("we have an erorr", error);
  }
};

export default LoginStudent;

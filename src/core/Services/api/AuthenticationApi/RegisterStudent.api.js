import axios from "axios";
import { toast } from "react-toastify";
import { setItem } from "../../Storage/Storage";

const RegisterStudent = async (obj) => {
  try {
    //call api
    const result = await axios.post(
      "http://localhost:5000/api/auth/register",
      obj
    );
    console.log(result.data);
    //call toastify
    toast.success(result.data.message[0].message);

    //save in local storage for filing loging form
    setItem("newUser", JSON.stringify(result.data.result));

    console.log(JSON.stringify(result.data.result));

    // redirect user to home page if its vallide
    setTimeout(() => {
      window.location = "/log-in";
    }, 2000);
  } catch (error) {
    if (
      error.response &&
      (error.response.status >= 400 || error.response.status <= 500)
    ) {
      toast.error(error.response.data.message[0].message);
    } else {
      toast.error(error.response.data.message.message[0].message);
    }
    console.log(error);
  }
};

export default RegisterStudent;

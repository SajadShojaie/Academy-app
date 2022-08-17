import axios from "axios";
import { toast } from "react-toastify";
// import { setItem } from "../Storage/Storage";

const ForgetPasswordStudent = async (obj) => {
  try {
    //call api
    const result = await axios.post(
      "http://localhost:5000/api/forgetpassword",
      obj
    );
    console.log(result.data);

    //call toastify
    toast.success(result.data.message[0].message);

    //redirect
    setTimeout(() => {
      window.location = "/log-in";
    }, 2000);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message.message[0].message);
    } else if (error.response && error.response.status === 405) {
      toast.error(" لینک قبلا ارسال شده است");
    } else {
      toast.error(error.response.data.message.message[0].message);
    }
    console.log("we have an erorr", error);
  }
};

export default ForgetPasswordStudent;

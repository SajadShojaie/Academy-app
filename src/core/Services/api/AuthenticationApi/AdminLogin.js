import axios from "axios";
import { toast } from "react-toastify";
import { setItem } from "../../Storage/Storage";

const AdminLogin = async (AdminEndPoint, obj) => {
  try {
    //call api
    const result = await axios.post(AdminEndPoint, {
      email: obj.email,
      password: obj.password,
    });
    console.log(result.data);

    //call toastify
    toast.success(result.data.message[0].message);

    //save on local storage
    // if (obj.checkBox) {
    //   setItem("UserToken", result.data.result.jwtToken);
    // } else {
    //   sessionStorage.setItem("UserToken", result.data.result.jwtToken);
    // }

    // save userData in cookie storage to access in admin panel
    const employeeModel = result.data.result.employeeModel;

    //save on locall storage for this site
    setItem("studentModle", JSON.stringify(employeeModel));

    // save userData in cookie storage to access in admin panel
    document.cookie = `employeeModel = ${JSON.stringify(employeeModel)} `;

    // redirect user to home page if its vallide
    setTimeout(() => {
      window.location = `http://localhost:3001/Auth/${result.data.result.jwtToken}`;
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

export default AdminLogin;

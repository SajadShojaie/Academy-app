import { clearStorage } from "../../core/Services/Storage/Storage";

const Logout = () => {
  //clear all thing in storage
  clearStorage();

  //clear login data if it on the session
  sessionStorage.removeItem("UserToken");

  //redirct to login page
  window.location = "log-in";
};

export default Logout;

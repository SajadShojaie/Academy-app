import axios from "axios";
import { getItem } from "../Storage/Storage";

const jwt_storage = getItem("UserToken");
const jwt_session = sessionStorage.getItem("UserToken");

axios.interceptors.request.use((config) => {
  config.headers["x-auth-token"] = jwt_storage || jwt_session;
  return config;
});

export default axios;

import axios from "axios";
import { toast } from "react-toastify";

const GetBlogData = async () => {
  try {
    //call api
    const result = await axios.get("http://localhost:5000/api/news");
    return result.data.result;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message);
    } else {
      toast.error(error.message);
    }
    console.log("we have an erorr", error);
  }
};

export default GetBlogData;

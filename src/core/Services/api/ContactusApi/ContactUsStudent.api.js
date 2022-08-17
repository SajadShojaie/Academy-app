import axios from "axios";
import { toast } from "react-toastify";

const ContactUsStudent = async (obj) => {
  try {
    //call api
    const result = await axios.post("http://localhost:5000/api/contactUs", {
      email: obj.email,
      name: obj.fullName,
      text: obj.commentText,
      //phonenumber
    });
    console.log(result);

    //call toastify
    toast.success(result.data.message[0].message);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast.error(error.response.data.message.message[0].message);
    } else {
      toast.error(error.message);
    }
    console.log("we have an erorr", error);
  }
};

export default ContactUsStudent;

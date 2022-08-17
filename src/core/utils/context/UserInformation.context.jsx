import { createContext, useContext, useState } from "react";
import { getItem } from "../../Services/Storage/Storage";

//create context
export const UserInfoContext = createContext();

//create custom hook
export const useUserInfo = () => {
  return useContext(UserInfoContext);
};

//crate provider
const UserInfoProvider = ({ children }) => {
  //get user info from localstorage
  const [data, setdata] = useState(JSON.parse(getItem("studentModle")));
  const [profile, setProfile] = useState(getItem("profile"));

  return (
    <UserInfoContext.Provider value={{ data, setdata, profile, setProfile }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoProvider;

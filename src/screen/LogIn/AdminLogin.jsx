import React from "react";
import LogIn from "./LogIn";

const AdminLogin = ({ location }) => {
  return (
    <LogIn
      title='ورود کارمندان'
      AdminEndPoint='http://localhost:5000/api/auth/employee/login'
      location={location}
    />
  );
};

export default AdminLogin;

//

import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const isAuth = localStorage.getItem("login_token") ? true : false;
  console.log(isAuth);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return children;
  }
};

export default RequiredAuth;

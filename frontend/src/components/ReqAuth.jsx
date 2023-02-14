import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const {token} = useSelector((state) => state?.AuthReducer);

  // console.log("token",data)

  if (!token?.length ) {
    return <Navigate to="/login" />;
  }

  return children;
};

export {ReqAuth};

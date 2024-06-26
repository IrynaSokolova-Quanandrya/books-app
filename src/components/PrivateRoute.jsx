import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsReFreshing } from "../redux/auth/selectors";


const PrivateRoute = ({component: Component, redirecTo }) => {
 
    const localUserId = localStorage.getItem("id");

  return localUserId  ? <Component /> : <Navigate to={redirecTo} />;
};
export default PrivateRoute;
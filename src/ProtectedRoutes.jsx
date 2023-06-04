import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

const useAuth = () => {
  const user = { role: "player", loggedIn: false };
  localStorage.getItem("token")
    ? (user.loggedIn = true)
    : (user.loggedIn = false);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  // const { userRole } = useContext(UserContext);
  // console.log("userRole is " + userRole);

  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/401" />;
};

export default ProtectedRoutes;

// const useAuth = () => {
//   const { userRole } = useContext(UserContext);
//   console.log("userRole is " + userRole);
//   const user = { loggedIn: false };
//   localStorage.getItem("token")
//     ? (user.loggedIn = true)
//     : (user.loggedIn = false);
//   return user && user.loggedIn;
// };

// const ProtectedRoutes = () => {
//   const isAuth = useAuth();

//   if (isAuth && userRole === "admin") {
//     return <Navigate to="/admin" />;
//   } else if (isAuth && userRole === "ground-in-charge") {
//     return <Navigate to="/manager" />;
//   } else if (isAuth && userRole === "player") {
//     return <Navigate to="/" />;
//   } else {
//     return isAuth ? <Outlet /> : <Navigate to="/401" />;
//   }
// };

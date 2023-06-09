import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";

// const useAuth = () => {
//   const user = { role: "player", loggedIn: false };

//   const role = localStorage.getItem("role");
//   user.role = role;
//   console.log(user.role);

//   localStorage.getItem("token")
//     ? (user.loggedIn = true)
//     : (user.loggedIn = false);

//   return user;
// };

// const ProtectedRoutes = () => {
//   //   const { userRole } = useContext(UserContext);
//   //   console.log("userRole is " + userRole);
//   const user = useAuth();
//   const navigate = useNavigate();

//   if (user.loggedIn) {
//     if (user.role === "admin") {
//       return <Navigate to="/admin" />;
//     } else if (user.role === "manager") {
//       return <Navigate to="/manager" />;
//     } else {
//       return <Outlet />;
//     }
//   }

//   return <Navigate to="/401" />;
// };

// export default ProtectedRoutes;

const useAuth = () => {
  // const { userRole } = useContext(UserContext);
  // console.log("userRole is " + userRole);
  const user = { loggedIn: false };
  localStorage.getItem("token")
    ? (user.loggedIn = true)
    : (user.loggedIn = false);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/401" />;
};
export default ProtectedRoutes;

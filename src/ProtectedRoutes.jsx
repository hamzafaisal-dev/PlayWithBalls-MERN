import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const user = { role: "player", loggedIn: false };
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

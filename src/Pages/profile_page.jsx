import React, { useState, useEffect } from "react";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import logo from "../Components/Forms/logo-black.png";

export default function profile_page() {
  return (
    <>
      {<MUINavbar logo={logo} />}
      {<MUILoggedNavbar logo={logo} />}
      <div
        style={{
          height: "100vh",
          width: "200px",
          backgroundColor: "red",
          position: "fixed",
          left: "0",
          top: "0",
          paddingTop: "200px",
        }}
      >
        profile_page
      </div>
    </>
  );
}

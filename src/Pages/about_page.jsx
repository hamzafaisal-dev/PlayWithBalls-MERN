import React from "react";
import { Grid } from "@mui/material";
import { MUINavbar } from "../Components/Navbar";
import "../Pages/style.css";

export default function about_page() {
  return (
    <>
      <MUINavbar />
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1180/1180504.png?w=740&t=st=1680879590~exp=1680880190~hmac=cd170fbd1a52a64e8cbd7a9cfe8a139594a85203438e27e9637d7b7c939a2502"
          alt="image description"
          style={{
            position: "absolute",
            top: "60px",
            left: "120px",
            width: "300px",
            height: "300px",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: "-1",
            transform: "rotate(225deg)",
          }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1165/1165249.png?w=740&t=st=1680880010~exp=1680880610~hmac=8cd65842827b512a0a0509bfba895d1da8a7ee854edd81b83650e01acc3aa7ea"
          alt="image description"
          style={{
            position: "absolute",
            top: "110px",
            right: "882.5px",
            width: "25px",
            height: "25px",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: "2",
          }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1200/1200792.png?w=740&t=st=1680873448~exp=1680874048~hmac=b7f22de96e4a07986d75bd2a4ce48b06724f3dbade9a9cf93dd7cf672ee4e814"
          alt="image description"
          style={{
            position: "absolute",
            top: "120px",
            right: "189px",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: "-1",
          }}
        />
        <div
          className="header-container"
          style={{
            position: "relative",
            zIndex: "1",
          }}
        >
          <h1>
            <span>The quickest way to</span>
            <br />
            <span>
              find the <span style={{ color: "#ffa500" }}>perfect</span> ground
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

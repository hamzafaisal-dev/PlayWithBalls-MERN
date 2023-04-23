import React from "react";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import { CityCard } from "../Components/Cards";
import "../Pages/style.css";

export default function home_page() {
  return (
    <>
      {/* <MUINavbar /> */}
      <MUILoggedNavbar />
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
          alt="ground art"
          style={{
            position: "absolute",
            top: "50px",
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
          alt="football icon"
          style={{
            position: "absolute",
            top: "110px",
            right: "874px",
            width: "25px",
            height: "25px",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: "2",
          }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1200/1200792.png?w=740&t=st=1680873448~exp=1680874048~hmac=b7f22de96e4a07986d75bd2a4ce48b06724f3dbade9a9cf93dd7cf672ee4e814"
          alt="trophy icon"
          style={{
            position: "absolute",
            top: "120px",
            right: "182px",
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
      <h2 className="select-city" style={{ marginBottom: "50px" }}>
        Select your city
      </h2>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <div
          className="city-cards-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <CityCard
            city="Karachi"
            subtitle="City of Lights"
            imageLink="https://source.unsplash.com/random?karachi"
          />
          <CityCard
            city="Islamabad"
            subtitle="The Green City"
            imageLink="https://source.unsplash.com/random?islamabad"
          />
          <CityCard
            city="Lahore"
            subtitle="City of Gardens"
            imageLink="https://source.unsplash.com/random?lahore"
          />
        </div>
      </div>
    </>
  );
}

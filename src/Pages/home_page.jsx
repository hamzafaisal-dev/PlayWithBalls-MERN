import React, { useEffect, useState, useContext } from "react";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import { CityCard } from "../Components/Cards";
import axios from "axios";
import "../Pages/style.css";
import logo from "../Components/Forms/logo-black.png";
import bannerImage from "./banner-image.jpg";
import { AppContext } from "../App";

export default function Home_page() {
  const { userName, setUserName } = useContext(AppContext);
  const [citiesData, setCitiesData] = useState([]);
  // const { userRole } = useContext(UserContext);

  useEffect(() => {
    // console.log(userRole);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/cities`, config)
      .then((response) => {
        setCitiesData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data.message === "Invalid token") {
            localStorage.removeItem("token");
            window.location.assign("/login");
          }
        } else if (error.request) {
          alert(error.request.data.message);
        } else {
          alert("Errorrf", error.message);
        }
      });
  }, []);

  return (
    <>
      {<MUINavbar logo={logo} />}
      {<MUILoggedNavbar logo={logo} />}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "150px",
        }}
      >
        <div
          style={{
            position: "absolute",
            marginTop: "-10px",
            left: "0",
            width: "100%",
            height: "600px",
            zIndex: "-1",
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 2,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            marginTop: "-10px",
            left: "0",
            width: "100%",
            height: "600px",
            zIndex: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay color
          }}
        ></div>
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
            zIndex: "-0.5",
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
            zIndex: "1",
          }}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1200/1200792.png?w=740&t=st=1680873448~exp=1680874048~hmac=b7f22de96e4a07986d75bd2a4ce48b06724f3dbade9a9cf93dd7cf672ee4e814"
          alt="trophy icon"
          style={{
            position: "absolute",
            top: "120px",
            right: "153px",
            width: "100px",
            height: "100px",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: "1",
          }}
        />
        <div
          className="header-container"
          style={{
            position: "relative",
          }}
        >
          <h1>
            <span
              style={{
                color: "white",
                zIndex: "2",
              }}
            >
              The quickest way to
            </span>

            <br />
            <span style={{ color: "white" }}>
              find your <span style={{ color: "#ffa500" }}>perfect</span> ground
            </span>
          </h1>
        </div>
      </div>
      <h1
        className="select-city"
        style={{
          marginBottom: "50px",
          marginTop: "100px",
        }}
      >
        Select your city
      </h1>
      <section id="cities-section">
        <div
          className="container"
          style={{
            display: "inline",
            marginBottom: "50px",
            marginLeft: "90px",
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
            {citiesData.map((city) => (
              <div
                key={city.cityName}
                onClick={() => {
                  window.location.assign(`/cities/${city._id}/all-grounds`);
                }}
                style={{ cursor: "pointer" }}
              >
                <CityCard
                  key={city.cityName}
                  city={city.cityName}
                  imageLink={`https://source.unsplash.com/random?${city.cityName.toLowerCase()}`}
                  grounds={city.grounds.length}
                />
              </div>
              // <CityCard
              //   key={city.cityName}
              //   city={city.cityName}
              //   imageLink={`https://source.unsplash.com/random?${city.cityName.toLowerCase()}`}
              // />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

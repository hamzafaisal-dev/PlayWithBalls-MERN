import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import { ArrowBackIosNew } from "@mui/icons-material";
import { GroundsSidebar } from "../Components/Sidebars";
import logo from "../Components/Forms/logo-white.png";
import axios from "axios";

import { GroundCard } from "../Components/Cards";
import Loader from "../Components/Loaders/index.jsx";

export default function Ground_page() {
  const [groundsData, setGroundsData] = useState([]);
  const [filters, setFilters] = useState({ area: undefined, type: undefined });
  const [showGrounds, setShowGrounds] = useState(true);
  const [noGrounds, setNoGrounds] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.substring(1); // removes the leading slash

    console.log(path);

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    setShowLoader(true);

    axios
      .post(
        `http://localhost:3001/${path}`,
        {
          area: filters.area,
          type: filters.type,
        },
        config
      )
      .then((response) => {
        setShowLoader(false);
        console.log(response);
        if (response.data.length == 0) {
          setShowGrounds(false);
          setNoGrounds(true);
        } else {
          setNoGrounds(false);
          setShowGrounds(true);
          setGroundsData(response.data);
        }
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
          alert("Error", error.message);
        }
      });
  }, [filters.area, filters.type]);

  return (
    <>
      {<MUINavbar logo={logo} />}
      {<MUILoggedNavbar logo={logo} />}
      {showLoader && <Loader />}
      {noGrounds && (
        <div
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "250px",
            marginTop: "180px",
            fontSize: "50px",
          }}
        >
          No grounds to show!
          <Button
            style={{ marginTop: "10px" }}
            onClick={() => window.location.reload()}
          >
            <Typography variant="button" style={{ marginRight: "4px" }}>
              <ArrowBackIosNew style={{ fontSize: "30px" }} />
            </Typography>
            <Typography variant="button" style={{ fontSize: "20px" }}>
              Go Back
            </Typography>
          </Button>
        </div>
      )}
      {showGrounds && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            rowGap: "30px",
            columnGap: "10px",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1216px",
            marginLeft: "19%",
            marginTop: "128px",
          }}
        >
          {groundsData.map((ground) => (
            <div
              key={ground.groundName}
              onClick={() => {
                const path = window.location.pathname.substring(1);
                window.location.assign(
                  `http://localhost:3000/${path}/${ground._id}`
                );
              }}
              style={{ cursor: "pointer" }}
            >
              <GroundCard
                key={ground.groundName}
                groundName={ground.groundName}
                address={ground.address}
                imageLink={
                  ground.coverImage
                    ? ground.coverImage
                    : "https://www.legrand.co.uk/modules/custom/legrand_ecat/assets/img/no-image.png"
                }
                // reviews={ground.reviews.length}
                type={ground.type}
              />
            </div>
          ))}
        </div>
      )}
      <GroundsSidebar onFilter={setFilters} />
    </>
  );
}

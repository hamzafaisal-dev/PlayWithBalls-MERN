import React, { useState, useEffect } from "react";
import { MUILoggedNavbar } from "../Components/Navbar";
import GroundsSidebar from "../Components/Sidebars";
import logo from "../Components/Forms/logo-white.png";
import axios from "axios";

import { GroundCard } from "../Components/Cards";

export default function Ground_page() {
  const [groundsData, setGroundsData] = useState([]);

  useEffect(() => {
    const path = window.location.pathname.substring(1); // removes the leading slash
    axios
      .get(`http://localhost:3001/${path}`)
      .then((response) => {
        setGroundsData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert(error.request);
        } else {
          alert("Error", error.message);
        }
      });
  });

  return (
    <>
      <MUILoggedNavbar logo={logo} />
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
            // onClick={() => {
            //   const path = window.location.pathname.substring(1);
            //   window.location.assign(
            //     `http://localhost:3001/${path}/${ground._id}`
            //   );
            // }}
            style={{ cursor: "pointer" }}
          >
            <GroundCard
              key={ground.groundName}
              groundName={ground.groundName}
              address={ground.address}
              imageLink={ground.imageLink}
              reviews={ground.reviews.length}
              type={ground.type}
            />
          </div>
        ))}
      </div>
      <GroundsSidebar />
    </>
  );
}

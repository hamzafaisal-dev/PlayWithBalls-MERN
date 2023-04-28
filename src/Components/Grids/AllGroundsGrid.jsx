import React, { useState, useEffect } from "react";
import { GroundCard } from "../Cards";
import axios from "axios";

export const AllGroundsGrid = () => {
  const [groundsData, setGroundsData] = useState([]);

  useEffect(() => {
    const path = window.location.pathname.substring(1); // removes the leading slash
    axios
      .get(`http://localhost:3001/${path}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div
      style={{
        backgroundColor: "red",
        marginLeft: "20%",
        marginTop: "128px",
      }}
    >
      <GroundCard />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dashboard,
  Assignment,
  People,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { Divider, Grid, Paper } from "@mui/material";
import "../AdminDashboard/style.css";
import GroundsGrid from "../GroundsGrid";
import CitiesGrid from "../CitiesGrid";
import GroundsCRUD from "../GroundsCRUD";
import { AddCity } from "../CitiesCRUD";
import { AddGroundButton, AddCityButton } from "../Buttons";

export default function AdminDashboard() {
  const [showGrounds, setShowGrounds] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showAddGroundsButton, setAddGroundsButton] = useState(false);
  const [showAddCityButton, setShowAddCityButton] = useState(false);
  const [showGroundsCRUD, setShowGroundsCRUD] = useState(false);

  const [showAddCity, setShowAddCity] = useState(false);

  const [groundsData, setGroundsData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/grounds")
  //     .then((response) => {
  //       setGroundsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cities")
      .then((response) => {
        setCitiesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleGroundsClick = () => {
    setShowAddCityButton(true);
    setShowCities(true);
    setShowAddCity(false);
  };

  const handleAddCityClick = () => {
    console.log(window.location.href);
    setShowAddCityButton(false);
    setShowCities(false);
    setShowAddCity(true);
  };

  const handleDashboardClick = () => {
    setShowGrounds(false);
    setAddGroundsButton(false);
  };

  const handleAddGroundClick = () => {
    setShowGrounds(false);
    setShowGroundsCRUD(true);
    setAddGroundsButton(false);
  };

  return (
    <Grid container className="dashboard-container">
      {/* sidebar */}
      <Grid item xs={3}>
        <Paper
          className="sidebar"
          style={{ backgroundColor: "#44a0de", height: "100%" }}
        >
          <div className="admin-profile">
            <img
              src="https://i.eurosport.com/2023/01/12/3524154-71830248-2560-1440.jpg"
              alt="Admin Profile"
              className="profile-pic"
            />
            <span className="admin-name">Hamza Faisal</span>
          </div>
          <ul>
            <li onClick={handleDashboardClick}>
              <Dashboard />
              <span className="sidebar-text">Dashboard</span>
            </li>
            <li>
              <Assignment />
              <span className="sidebar-text">Bookings</span>
            </li>
            <li onClick={handleGroundsClick}>
              <Settings />
              <span className="sidebar-text">Grounds</span>
            </li>
            <li>
              <People />
              <span className="sidebar-text">Customers</span>
            </li>
            <Divider
              style={{ backgroundColor: "black", marginBottom: "30px" }}
            />
            <li>
              <Settings />
              <span className="sidebar-text">Settings</span>
            </li>
            <li>
              <ExitToApp />
              <span className="sidebar-text">Log out</span>
            </li>
          </ul>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <div className="content">
          <h1>Welcome to the Admin Dashboard!</h1>
          <p>
            This is where you can manage your bookings, grounds, customers, and
            settings. Use the sidebar to navigate to the different sections of
            the dashboard.
          </p>
        </div>
        <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
          {showAddGroundsButton && (
            <AddGroundButton handleAddGroundClick={handleAddGroundClick} />
          )}
          {showAddCityButton && (
            <AddCityButton handleAddCityClick={handleAddCityClick} />
          )}
        </Grid>
        {/* {showGrounds && <GroundsGrid grounds={groundsData} />} */}
        {showGroundsCRUD && <GroundsCRUD />}
        {showAddCity && <AddCity />}
        {showCities && <CitiesGrid cities={citiesData} />}
      </Grid>
    </Grid>
  );
}

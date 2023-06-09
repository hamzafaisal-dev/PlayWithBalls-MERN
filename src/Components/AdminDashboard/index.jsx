import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dashboard,
  Assignment,
  People,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { Divider, Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import "../AdminDashboard/style.css";
import GroundsGrid from "../GroundsGrid";
import CitiesGrid from "../CitiesGrid";
import GroundsCRUD from "../GroundsCRUD";
import { AddCity } from "../CitiesCRUD";
import { AddGroundButton, AddCityButton } from "../Buttons";
import { AddUserDialog, AddGroundDialog, ViewBookingsDialog } from "../Dialogs";
import { UsersTable, GroundsTable, BookingsTable } from "../Tables/index.jsx";

export default function AdminDashboard() {
  const [showGrounds, setShowGrounds] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [showAddGroundsButton, setAddGroundsButton] = useState(false);
  const [showAddCityButton, setShowAddCityButton] = useState(false);
  const [showGroundsCRUD, setShowGroundsCRUD] = useState(false);

  const [showUsersTable, setShowUsersTable] = useState(false);
  const [showGroundsTable, setShowGroundsTable] = useState(false);

  const [showAddCity, setShowAddCity] = useState(false);

  const [citiesData, setCitiesData] = useState([]);

  const [groundID, setGroundID] = useState("");

  const [adminData, setAdminData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [groundsData, setGroundsData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [addGroundModalOpen, setAddGroundModalOpen] = useState(false);
  const [viewBookingsModalOpen, setViewBookingsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    dayOfWeek: "",
    startTime: "",
    endTime: "",
    rate: "",
    status: "",
  });

  const handleCloseModal = () => {
    console.log(`formdata is`);
    console.log(formData);
    // setAddSlotModalOpen(false);
  };

  // get admin data
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/user`, config)
      .then((response) => {
        console.log(response.data);
        setAdminData(response.data.user);
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

  // get cities data
  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   };

  //   axios
  //     .get("http://localhost:3001/cities", config)
  //     .then((response) => {
  //       setCitiesData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleUsersClick = () => {
    setShowAddCityButton(true);
    setShowCities(true);
    setShowAddCity(false);

    setShowGroundsTable(false);
    setShowUsersTable(true);
  };

  const handleGroundsClick = () => {
    setShowAddCityButton(true);
    setShowCities(true);
    setShowAddCity(false);

    setShowGroundsTable(true);
    setShowUsersTable(false);
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

    setShowUsersTable(false);
    setShowGroundsTable(false);
  };

  const handleAddGroundClick = () => {
    setShowGrounds(false);
    setShowGroundsCRUD(true);
    setAddGroundsButton(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleOpenAddGroundModal = () => {
    setAddGroundModalOpen(true);
  };

  const handleOpenViewBookingsModal = () => {
    setViewBookingsModalOpen(true);
  };

  const handleLogOut = () => {
    window.location.assign("/");
    localStorage.removeItem("token");
  };

  // get all users data
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/users`, config)
      .then((response) => {
        console.log(response.data);
        setUsersData(response.data);
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

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/grounds`, config)
      .then((response) => {
        console.log(response.data);
        setGroundsData(response.data);
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
    <Grid container className="dashboard-container">
      {/* sidebar */}
      <Grid item xs={3}>
        <Paper
          className="sidebar"
          style={{ backgroundColor: "#24DC89", height: "100%" }}
        >
          <div className="admin-profile">
            <Avatar
              alt="Admin Profile"
              className="profile-pic"
              src={adminData.profileImage}
            ></Avatar>
            <span className="admin-name">
              {adminData.firstName + " " + adminData.lastName}
            </span>
          </div>
          <ul>
            <li onClick={handleDashboardClick}>
              <Dashboard />
              <span className="sidebar-text">Dashboard</span>
            </li>
            <li onClick={handleGroundsClick}>
              <Settings />
              <span className="sidebar-text">Grounds</span>
            </li>
            <li onClick={handleUsersClick}>
              <People />
              <span className="sidebar-text">Users</span>
            </li>
            <Divider
              style={{ backgroundColor: "black", marginBottom: "30px" }}
            />
            <li>
              <ExitToApp />
              <span
                className="sidebar-text"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Log out
              </span>
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
        {/* users table */}
        {showUsersTable && (
          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <AddUserDialog
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            ></AddUserDialog>
            <UsersTable
              usersData={usersData}
              handleOpenModal={handleOpenModal}
            ></UsersTable>
          </Grid>
        )}
        {/* grounds table */}
        {showGroundsTable && (
          <Grid item xs={12} md={4} sx={{ textAlign: "right" }}>
            <AddGroundDialog
              addGroundModalOpen={addGroundModalOpen}
              setAddGroundModalOpen={setAddGroundModalOpen}
            ></AddGroundDialog>
            {/* <AddSlotDialog
              addSlotModalOpen={addSlotModalOpen}
              setAddSlotModalOpen={setAddSlotModalOpen}
            ></AddSlotDialog> */}
            <ViewBookingsDialog
              viewBookingsModalOpen={viewBookingsModalOpen}
              setViewBookingsModalOpen={setViewBookingsModalOpen}
              setGroundID={setGroundID}
            ></ViewBookingsDialog>
            <GroundsTable
              groundsData={groundsData}
              handleOpenAddGroundModal={handleOpenAddGroundModal}
              setViewBookingsModalOpen={setViewBookingsModalOpen}
            ></GroundsTable>
          </Grid>
        )}
        {/* {showGrounds && <GroundsGrid grounds={groundsData} />} */}
        {/* {showGroundsCRUD && <GroundsCRUD />} */}
        {/* {showAddCity && <AddCity />}
        {showCities && <CitiesGrid cities={citiesData} />} */}
      </Grid>
    </Grid>
  );
}

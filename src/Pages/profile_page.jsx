import React, { useContext, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Avatar,
} from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";

import logo from "../Components/Forms/logo-black.png";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import { AppContext } from "../App";
import axios from "axios";

export default function ProfilePage() {
  const { userName, setUserName } = useContext(AppContext);

  const [userData, setUserData] = useState([]);

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
        console.log(response.data.user);
        setUserData(response.data.user);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else if (error.request) {
          alert(error.request.data.message);
        } else {
          alert("Errorrf", error.message);
        }
      });
  }, []);

  const handleEditIconClick = () => {
    console.log(userData);
    setUserName("BlingBlong");
    console.log(userName);
  };

  return (
    <>
      <MUINavbar logo={logo} />
      <MUILoggedNavbar logo={logo} />

      <Card
        style={{
          maxWidth: 500,
          margin: "auto",
          marginTop: "180px",
          borderRadius: "20px",
        }}
      >
        <CardHeader
          style={{
            backgroundColor: "#24DC89",
            color: "#fff",
          }}
          title="My Profile"
          action={
            <IconButton
              style={{
                position: "absolute",
                top: "192px",
                right: "530px",
              }}
              onClick={handleEditIconClick}
            >
              <EditIcon />
            </IconButton>
          }
        />

        <CardContent>
          {/* user picture */}
          <Avatar
            sx={{
              width: "80px",
              height: "80px",
              backgroundColor: "#ccc",
              marginBottom: "10px",
            }}
            // src="https://yt3.googleusercontent.com/C1x5KJWWQW_JoHQCEEaqpXU6hkII-6kWRTUk8Urg25tE-ZLrKK11WWlKBhfGwt-ZzseGsvYwcXU=s900-c-k-c0x00ffffff-no-rj"
          ></Avatar>

          {/* <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#ccc",
              marginBottom: "10px",
            }}
          /> */}

          {/* user name */}
          <Typography variant="h6" gutterBottom>
            {userData.firstName + " " + userData.lastName}
          </Typography>

          {/* user email */}
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {userData.email}
          </Typography>

          {/* user bio */}
          <Typography variant="body1" gutterBottom>
            {userData.bio || "No bio available"}
          </Typography>

          {/* user position */}
          <Typography variant="body2" gutterBottom>
            Position: {userData.position || "No position selected"}
          </Typography>

          {/* user age */}
          <Typography variant="body2" gutterBottom>
            Age: {userData.age || "No age available"}
          </Typography>

          {/* user gender */}
          <Typography variant="body2" gutterBottom>
            Gender: {userData.gender || "No gender available"}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

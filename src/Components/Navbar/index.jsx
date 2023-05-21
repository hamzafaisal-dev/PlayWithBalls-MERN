import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Avatar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { SignUpButton, SignInButton } from "../Buttons";

export const MUINavbar = ({ logo }) => {
  if (localStorage.token == null) {
    return (
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          paddingTop: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            className="football-logo"
            src={logo}
            alt="Logo"
            style={{ marginLeft: "60px" }}
          />
          <Stack direction="row" spacing={2}>
            <SignInButton></SignInButton>
            <SignUpButton></SignUpButton>
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
};

export const MUILoggedNavbar = ({ logo }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleContactUsClick = () => {
    window.location.assign("/contact");
  };

  const handleAboutUsClick = () => {
    window.location.assign("/about");
  };

  const handleMyBookingsClick = () => {
    window.location.assign("/bookings");
  };

  const handleProfileIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.assign("/");
  };

  if (localStorage.token != undefined || localStorage.token != null) {
    return (
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#7fc98f",
          background: "linear-gradient(to bottom right, #00b09b, #96c93d)",
          boxShadow: "none",
          paddingTop: "30px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingBottom: "20px",
          zIndex: 6,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            className="football-logo"
            src={logo}
            alt="Logo"
            style={{
              marginLeft: "60px",
              cursor: "pointer",
              marginBottom: "12px",
            }}
            onClick={() => {
              window.location.assign("/");
            }}
          />
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography
              sx={{
                color: "white",
                fontSize: "17px",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleMyBookingsClick}
            >
              My Bookings
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "17px",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleAboutUsClick}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "17px",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={handleContactUsClick}
            >
              Contact Us
            </Typography>
            <Avatar
              sx={{
                bgcolor: "#FFA500",
                width: 42,
                height: 42,
                cursor: "pointer",
                marginBottom: "10px",
              }}
              onClick={handleProfileIconClick}
            >
              H
            </Avatar>
          </Stack>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleLogoutClick}>Log Out</MenuItem>
        </Menu>
      </AppBar>
    );
  }
};

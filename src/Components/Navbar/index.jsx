import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { CatchingPokemon } from "@mui/icons-material";
import { SignUpButton, SignInButton } from "../Buttons";
import "../../logo-black.png";

export const MUINavbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingTop: "30px",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, color: "#18204A" }}
          fontFamily="CamptonBoldDEMO"
        >
          PlayPlace
        </Typography>
        <Stack direction="row" spacing={2}>
          <SignInButton></SignInButton>
          <SignUpButton></SignUpButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

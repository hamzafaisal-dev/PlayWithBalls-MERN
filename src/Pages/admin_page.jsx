import React from "react";
import AdminDashboard from "../Components/AdminDashboard";
import { SuccessSnackBar, ErrorSnackBar } from "../Components/Snackbars";
import { MUIDialog } from "../Components/Dialogs";
import { TextField } from "@mui/material";

export default function admin_page() {
  return <AdminDashboard />;
  // return (
  //   <TextField
  //     id="basic-textfield"
  //     label="Basic TextField"
  //     defaultValue="Default text"
  //     variant="outlined"
  //   />
  // );
}

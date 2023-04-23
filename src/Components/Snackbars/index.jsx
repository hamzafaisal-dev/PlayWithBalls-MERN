import React, { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export const SuccessSnackBar = function SuccessSnackBar({ successMessage }) {
  const [open, setOpen] = useState(true);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%", backgroundColor: "#90EE90" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export const ErrorSnackBar = function ErrorSnackBar({
  errorMessage = "Something went wrong",
}) {
  const [open, setOpen] = useState(true);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

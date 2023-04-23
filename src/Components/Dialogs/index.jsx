import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Alert,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";

export const UpdateDialog = ({
  openUpdateCityDialog,
  setOpenUpdateCityDialog,
  cityToUpdate,
}) => {
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // const [showErrorAlert, setShowErrorAlert] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  const [cityName, setCityName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleUpdate = async () => {
    setOpenUpdateCityDialog(false);

    axios
      .get(`http://localhost:3001/cities/${cityToUpdate._id}`)
      .then((response) => {
        const cityData = response.data;
        setCityName(cityData.cityName);
        setLatitude(cityData.latitude);
        setLongitude(cityData.longitude);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.message);
        } else if (error.request) {
          alert(error.request.message);
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <>
      <Dialog
        open={openUpdateCityDialog}
        onClose={() => {
          setOpenUpdateCityDialog(false);
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Update City</DialogTitle>
        <DialogContent>
          <form
            // onSubmit={handleSave}
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-35px",
            }}
          >
            <Grid
              container
              spacing={2}
              component="div"
              className="cities-large-container"
              style={{
                marginLeft: "20px",
              }}
            >
              {/* city name field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="cityName"
                  label="City Name"
                  variant="outlined"
                  fullWidth
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                />
              </Grid>
              {/* latitude field */}
              <Grid item xs={12}>
                <TextField
                  id="latitude"
                  label="Latitude"
                  variant="outlined"
                  fullWidth
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </Grid>
              {/* longitude field */}
              <Grid item xs={12}>
                <TextField
                  id="longitude"
                  label="Longitude"
                  variant="outlined"
                  fullWidth
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <Button type="submit" variant="contained" color="primary">
            Create city
          </Button>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            style={{ marginLeft: "10px" }}
            onClick={handleClear}
          >
            Clear all
          </Button> */}
                {/* {showSuccessSnackBar && (
            <SuccessSnackBar successMessage={"City created successfully"} />
          )}
          {showErrorSnackBar && <ErrorSnackBar errorMessage={errorMessage} />} */}
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpdateCityDialog(false)}>Cancel</Button>
          <Button autoFocus onClick={handleUpdate}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const DeleteDialog = ({
  openDeleteCityDialog,
  setOpenDeleteCityDialog,
  cityToDelete,
}) => {
  // const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  // const [showErrorAlert, setShowErrorAlert] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");

  const handleUpdate = async () => {
    setOpenDeleteCityDialog(false);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = `http://localhost:3001/cities/${cityToDelete._id}`;
      const response = await axios.delete(url, config);

      if (response) {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.message);
      } else if (error.request) {
        alert(error.request.message);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Dialog
        open={openDeleteCityDialog}
        onClose={() => {
          setOpenDeleteCityDialog(false);
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Delete City</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to delete this city?<br></br>Once deleted,
            this cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteCityDialog(false)}>Cancel</Button>
          <Button autoFocus onClick={handleUpdate}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const MUIDialog = () => {
  const [open, setOpen] = useState(true);

  // const openDialog = () => {
  //   alert("Sign in button clicked");
  //   // Perform other actions here
  // };

  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>Press Me Hard</Button> */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Dialog description
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

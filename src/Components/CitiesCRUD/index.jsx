import { useState } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import { SuccessSnackBar, ErrorSnackBar } from "../Snackbars/index.jsx";

export const AddCity = function AddCity() {
  const [cityName, setCityName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [showSuccessSnackBar, setShowSuccessSnackBar] = useState(false);
  const [showErrorSnackBar, setShowErrorSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleClear = () => {
    setCityName("");
    setLatitude("");
    setLongitude("");
  };

  const handleSave = async (event) => {
    try {
      event.preventDefault();

      const data = {
        cityName,
        latitude,
        longitude,
      };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = "http://localhost:3001/cities";
      const response = await axios.post(url, data, config);

      if (response) {
        setShowSuccessSnackBar(true);
        setSuccessMessage(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        setShowErrorSnackBar(true);
        setErrorMessage(error.response.message);
      } else if (error.request) {
        setShowErrorSnackBar(true);
        setErrorMessage(error.request.message);
      } else {
        setShowErrorSnackBar(true);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSave}
      style={{ display: "flex", alignItems: "center" }}
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
            required
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
          <Button type="submit" variant="contained" color="primary">
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
          </Button>
          {showSuccessSnackBar && (
            <SuccessSnackBar successMessage={successMessage} />
          )}
          {showErrorSnackBar && <ErrorSnackBar errorMessage={errorMessage} />}
        </Grid>
      </Grid>
    </form>
  );
};

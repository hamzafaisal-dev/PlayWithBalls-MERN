import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Grid,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
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

export const AddUserDialog = ({ modalOpen, setModalOpen }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const url = "http://localhost:3001/users/signup";
    const response = await axios.post(url, formData, config);

    if (response) {
      alert("New user created succesfully");
    }

    handleCloseModal();
  };

  return (
    <Dialog open={modalOpen} onClose={handleCloseModal}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="role"
            label="Role"
            value={formData.role}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const EditUserDialog = ({ modalOpen, setModalOpen }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const url = "http://localhost:3001/users/signup";
    const response = await axios.post(url, formData, config);

    if (response) {
      alert("New user created succesfully");
    }

    handleCloseModal();
  };

  return (
    <Dialog open={modalOpen} onClose={handleCloseModal}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="role"
            label="Role"
            value={formData.role}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const AddGroundDialog = ({
  addGroundModalOpen,
  setAddGroundModalOpen,
}) => {
  const [formData, setFormData] = useState({
    city: "",
    groundName: "",
    area: "",
    address: "",
    coverImage: "",
    information: "",
    type: "",
    slots: [],
    inchargeID: null,
    reviews: [],
    bookings: [],
  });

  const [cities, setCities] = useState([]);

  const handleCloseModal = () => {
    console.log(`formdata is`);
    console.log(formData.city);
    setAddGroundModalOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const url = `http://localhost:3001/cities/${formData.city}/grounds`;
    const response = await axios.post(url, formData, config);

    response
      ? alert("New ground created succesfully")
      : alert(response.error.message);

    handleCloseModal();
  };

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get("http://localhost:3001/cities", config)
      .then((response) => {
        console.log(response.data);
        setCities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Dialog open={addGroundModalOpen} onClose={handleCloseModal}>
      <DialogTitle>Add Ground</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
          <Select
            name="city"
            label="City"
            value={formData.city}
            onChange={handleFormChange}
            fullWidth
            required
          >
            {cities.map((city) => (
              <MenuItem key={city._id} value={city._id}>
                {city.cityName}
              </MenuItem>
            ))}
          </Select>
          <TextField
            name="groundName"
            label="Ground Name"
            value={formData.groundName}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="area"
            label="Area"
            value={formData.area}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="address"
            label="Address"
            value={formData.address}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="coverImage"
            label="Cover Image"
            value={formData.coverImage}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            name="information"
            label="Information"
            value={formData.information}
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            name="type"
            label="Type"
            value={formData.type}
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="inchargeID"
            label="Incharge ID"
            value={formData.inchargeID}
            onChange={handleFormChange}
            fullWidth
          />

          <Button type="submit" variant="contained" sx={{ marginTop: "10px" }}>
            Create ground
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ViewBookingsDialog = ({
  viewBookingsModalOpen,
  setViewBookingsModalOpen,
}) => {
  const handleCloseModal = () => {
    setViewBookingsModalOpen(false);
  };

  const bookings = [
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs.2600",
      bookingStatus: "confirmed",
    },
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs.2000",
      bookingStatus: "pending",
    },
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs. 500",
      bookingStatus: "confirmed",
    },
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs. 600",
      bookingStatus: "confirmed",
    },
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs. 0",
      bookingStatus: "confirmed",
    },
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs. 0",
      bookingStatus: "confirmed",
    },
    {
      bookingDate: "6/6/2023",
      booker: "Hamza Faisal",
      amountPaid: "Rs. 1100",
      bookingStatus: "confirmed",
    },
  ];

  return (
    <>
      <Dialog open={viewBookingsModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Bookings</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "inline-block",
              marginLeft: "20px",
              backgroundColor: "#F2F2F2",
              width: "1000px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
          >
            {/* <Typography
            variant="h8"
            sx={{
              marginTop: "10px",
              marginRight: "10px",
              marginLeft: "360px",
              display: "inline-block",
              backgroundColor: "greenyellow",
              padding: "5px 14px",
              cursor: "pointer",
            }}
          >
            <Add
              sx={{
                fontSize: 20,
                marginBottom: "5px",
              }}
            />
            ADD GROUND
          </Typography> */}

            <div style={{ marginTop: "20px" }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Booking Date</TableCell>
                      <TableCell>Booker</TableCell>
                      <TableCell>Amount Paid</TableCell>
                      <TableCell>Booking Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bookings.map((booking, index) => (
                      <TableRow key={index}>
                        <TableCell>{booking.bookingDate}</TableCell>
                        <TableCell>{booking.booker}</TableCell>
                        <TableCell>{booking.amountPaid}</TableCell>
                        <TableCell>{booking.bookingStatus}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

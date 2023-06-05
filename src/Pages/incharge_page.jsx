import React, { useState, useEffect } from "react";
import { Typography, Button, Box, Tabs, Tab } from "@mui/material";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import logo from "../Components/Forms/logo-black.png";
import axios from "axios";

const InchargePage = () => {
  const [value, setValue] = useState("one");
  const [bookingsData, setBookingsData] = useState([]);

  const [groundData, setGroundData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/manager/ground`, config)
      .then((response) => {
        console.log(response.data);
        setBookingsData(response.data.bookings);
        setGroundData(response.data);
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

  const pendingBookings = bookingsData.filter(
    (booking) => booking.bookingStatus === "pending"
  );

  const approvedBookings = bookingsData.filter(
    (booking) => booking.bookingStatus === "approved"
  );

  const rejectedBookings = bookingsData.filter(
    (booking) => booking.bookingStatus === "rejected"
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleApprove = () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/manager/ground`, config)
      .then((response) => {
        console.log(response.data);
        setBookingsData(response.data.bookings);
        setGroundData(response.data);
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
  };

  //   useEffect(() => {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     };

  //     axios
  //       .get(`http://localhost:3001/ground/${groundID}/bookings`, config)
  //       .then((response) => {
  //         setBookingsData(response.data);
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           alert(error.response.data.message);
  //         } else if (error.request) {
  //           alert(error.request.data.message);
  //         } else {
  //           alert("Errorrf", error.message);
  //         }
  //       });
  //   }, []);

  return (
    <>
      <MUINavbar logo={logo} />
      <MUILoggedNavbar logo={logo} />
      <Typography
        variant="h5"
        sx={{ marginTop: "200px", marginLeft: "190px", fontWeight: "800" }}
      >
        Manage your ground's bookings here
      </Typography>

      <Box
        sx={{
          display: "inline-block",
          marginTop: "30px",
          marginLeft: "170px",
          backgroundColor: "greenyellow",
          borderRadius: "20px",
          width: "80%",
          border: "1px solid black",
          p: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Pending" />
          <Tab value="two" label="Approved" />
          <Tab value="three" label="Rejected" />
        </Tabs>
        {value === "one" && (
          <div style={{ marginTop: "20px" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Ground</th>
                  <th>Booker Name</th>
                  <th>Booking Date</th>
                  <th>Subtotal</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingBookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{groundData.groundName}</td>
                    <td>
                      {booking.user.firstName + " " + booking.user.lastName}
                    </td>
                    <td>
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </td>
                    <td>RS. {booking.totalAmount}</td>
                    <td>{booking.bookingStatus}</td>
                    <td>
                      <Button
                        variant="contained"
                        sx={{ marginRight: "10px", backgroundColor: "#24DC89" }}
                      >
                        Approve Booking
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ marginRight: "10px", backgroundColor: "red" }}
                      >
                        Reject Booking
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {value === "two" && <div>Approved content</div>}
        {value === "three" && <div>Rejected content</div>}
      </Box>
    </>
  );
};

export default InchargePage;

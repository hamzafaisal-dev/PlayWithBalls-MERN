import { useEffect, useState } from "react";
import axios from "axios";
import { MUILoggedNavbar, MUINavbar } from "../Components/Navbar";
import { Box, Typography, Button } from "@mui/material";
import logo from "../Components/Forms/logo-white.png";

export default function BookingsPage() {
  const [showBookings, setShowBookings] = useState(false);
  const [noBookings, setShowNoBookings] = useState(false);
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/mybookings`, config)
      .then((response) => {
        setBookingsData(response.data);
        console.log(response);
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

  if (bookingsData.length != 0) {
    return (
      <>
        <MUINavbar logo={logo} />
        <MUILoggedNavbar logo={logo} />
        <Box
          sx={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "900px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#F6F6F6",
                padding: "16px",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Booking Date
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Ground Name
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Amount Paid
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Booking Status
              </Typography>
            </Box>
            {bookingsData.map((booking) => (
              <Box
                key={booking._id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  padding: "16px",
                  borderRadius: "4px",
                  marginBottom: "16px",
                }}
              >
                <Typography variant="subtitle1">
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </Typography>
                <Typography variant="subtitle1">
                  {booking.ground.groundName}
                </Typography>
                <Typography variant="subtitle1">
                  Rs.{booking.totalAmount}
                </Typography>
                <Typography variant="subtitle1">
                  {booking.bookingStatus}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        {<MUINavbar logo={logo} />}
        {<MUILoggedNavbar logo={logo} />}
        <Typography fontSize={27} textAlign={"center"} marginTop={"330px"}>
          Looks like you haven't made any bookings yet<br></br>Head on over to
          the home page to get started
        </Typography>
        <Button
          href="/"
          sx={{
            marginLeft: "700px",
            marginTop: "20px",
            fontSize: "20px",
            backgroundColor: "greenyellow",
            color: "black",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          Go To Home
        </Button>
      </>
    );
  }
}

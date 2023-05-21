import { useEffect, useState } from "react";
import axios from "axios";
import { MUILoggedNavbar, MUINavbar } from "../Components/Navbar";
import { Box, Typography } from "@mui/material";
import logo from "../Components/Forms/logo-white.png";

export default function BookingsPage() {
  const [showBookings, setShowBookings] = useState(false);
  const [noBookings, setShowNoBookings] = useState(false);
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/bookings`)
      .then((response) => {
        if (response.data.length === 0) {
          setShowBookings(false);
          setShowNoBookings(true);
        } else {
          setShowNoBookings(false);
          setShowBookings(true);

          setBookingsData(response.data.bookings);
        }
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
}

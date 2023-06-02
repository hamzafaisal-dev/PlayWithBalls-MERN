import React, { useEffect } from "react";
import { Typography, Divider, Button } from "@mui/material";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import logo from "../Components/Forms/logo-black.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { slots, date, groundName, subtotal, cityID, groundID } =
    location.state;

  const handleCheckoutClick = async (
    slots,
    date,
    groundName,
    subtotal,
    cityID,
    groundID
  ) => {
    navigate("/payment", {
      state: {
        slots: slots,
        date: date,
        groundName: groundName,
        subtotal: subtotal,
        groundID: groundID,
      },
    });
  };

  return (
    <>
      {<MUINavbar logo={logo} />}
      {<MUILoggedNavbar logo={logo} />}
      <div style={{ textAlign: "center", marginTop: "190px" }}>
        <Typography variant="h3" style={{ fontWeight: "lighter" }}>
          Total Price: Rs. {location.state.subtotal}
        </Typography>
        <Divider
          style={{
            backgroundColor: "black",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: "1rem",
            marginBottom: "1rem",
            backgroundImage:
              "linear-gradient(to bottom right, #24dc89, #24dc89)",
            color: "white",
            borderColor: "black",
            padding: "12px",
            borderRadius: "40px",
            width: "400px",
            height: "60px",
            fontSize: "0.8rem",
          }}
          onClick={() =>
            handleCheckoutClick(
              slots,
              date,
              groundName,
              subtotal,
              cityID,
              groundID
            )
          }
        >
          Proceed to Checkout
        </Button>
        <Typography
          variant="h6"
          style={{
            fontWeight: "lighter",
            marginTop: "18px",
            marginBottom: "8px",
            marginRight: "420px",
          }}
        >
          Bookings in basket: {location.state.slots.length}
        </Typography>
        <div>
          {location.state.slots.map((slot) => {
            return (
              <div
                class="slots-container"
                key={slot._id}
                style={{ width: "600px", marginLeft: "450px" }}
              >
                <div class="left-side">
                  <div class="line">{location.state.groundName}</div>
                  <div class="line">{`${slot.dayOfWeek}, ${location.state.date}`}</div>
                  <div class="line">{`${slot.startTime} - ${slot.endTime}`}</div>
                </div>
                <div class="right-side">
                  <div class="line slot-rate">{`Rs.${slot.rate}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookingPage;

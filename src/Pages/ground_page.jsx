import React, { useEffect, useState, useContext } from "react";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import logo from "../Components/Forms/logo-black.png";
import { SlotsSidebar } from "../Components/Sidebars";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Link,
  StaticDatePicker,
} from "@mui/material";
import { Info, Schedule, LocationOn } from "@mui/icons-material";
import axios from "axios";
import "../Pages/ground_page_style.css";
import Reviews from "../Components/Reviews";

const GroundPage = () => {
  const [reviews, setReviews] = useState([]);
  const [groundName, setGroundName] = useState("");
  const [groundInfo, setGroundInfo] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [groundImage, setGroundImage] = useState("");
  const [selectedSlots, setSelectedSlots] = useState([]);

  // const { setUserName } = useContext(AppContext);

  const calcMeridian = (time) => {
    const afterMeridianRegex = /^(0[0-9]|1[0-1])$/;
    const hrs = time.substring(0, 2);

    let meridian = afterMeridianRegex.exec(hrs);

    meridian ? (meridian = "AM") : (meridian = "PM");

    return meridian;
  };

  function addSelectedSlot(slot, index) {
    setSelectedSlots((prevSelectedSlots) => {
      const isSelected = prevSelectedSlots.some(
        (slot) => slot._id === slots[index]._id
      );

      if (!isSelected) {
        return [...prevSelectedSlots, slots[index]];
      }

      return prevSelectedSlots.filter((slot) => slot._id !== slots[index]._id);
    });
  }

  function handleDateChange(event) {
    setSelectedDate(event.target.value);
    // setUserName("New name");
  }

  useEffect(() => {
    const path = window.location.pathname.substring(1);

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`http://localhost:3001/${path}`, config)
      .then((response) => {
        setReviews(response.data.reviews);
        setGroundName(response.data.groundName);
        setSlots(response.data.slots);
        setGroundInfo(response.data.groundInfo);
        setGroundImage(response.data.coverImage);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.data.message === "Invalid token") {
          localStorage.removeItem("token");
          window.location.assign("/login");
        }

        if (error.message === "Request failed with status code 404") {
          window.location.assign("/404");
        }
      });
  }, []);

  return (
    <>
      <MUINavbar logo={logo} />
      <MUILoggedNavbar logo={logo} />
      <SlotsSidebar
        slots={selectedSlots}
        date={selectedDate}
        groundName={groundName}
      />
      <div className="grounds-info-div">
        <Card sx={{ width: "97%", borderRadius: "20px" }}>
          <CardMedia
            component="img"
            height="400"
            image={
              groundImage ||
              "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Ground Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {groundName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Info sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {groundInfo ? groundInfo : "Ground information not available"}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Schedule sx={{ mr: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {`Bookings for ${groundName} must be made a
                minimum of 24 hours before the booking is to take place.`}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOn sx={{ mr: 1 }} />
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                color="text.secondary"
              >
                {`View ${groundName} on Google Maps.`}
              </Link>
            </Box>
          </CardContent>
        </Card>
      </div>
      {/* // slots select */}
      <div className="slots-select-card">
        <Card sx={{ width: "97%", borderRadius: "20px", marginRight: "32px" }}>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "15px",
                marginBottom: "40px",
              }}
            >
              {" "}
              <Typography
                variant="h5"
                component="div"
                style={{ marginTop: "10px" }}
              >
                Select Date
              </Typography>
              <input
                type="date"
                id="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                style={{
                  border: "2px solid #24DC89",
                  background: "none",
                  marginLeft: "20px",
                  padding: "15px 45px",
                  width: "220px",
                  outline: "none",
                  color: "black",
                  borderRadius: "25px",
                  textAlign: "center",
                }}
              />
            </div>

            <div>
              <Typography
                variant="h5"
                component="div"
                style={{ marginLeft: "15px" }}
              >
                Select your slot(s)
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",

                  marginTop: "15px",
                }}
                id="all-slots"
              >
                {slots.map((slot, index) => (
                  <div
                    className="slots-div"
                    onClick={() => addSelectedSlot(slot, index)}
                    key={slot._id}
                    style={{
                      backgroundColor: selectedSlots.some(
                        (selected) => selected._id === slot._id
                      )
                        ? "#00ffef"
                        : "#24DC89",
                    }}
                  >
                    <span>{slot.dayOfWeek}</span>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span>{`${slot.startTime} ${calcMeridian(
                        slot.startTime
                      )} - ${slot.endTime} ${calcMeridian(
                        slot.startTime
                      )}`}</span>
                      <div className="divider"></div>
                      <span>{`Rs.${slot.rate}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <Box className="slot-select-box"></Box>
        </Card>
      </div>
      {/* // reviews */}
      <div className="slots-select-card">
        <Card sx={{ width: "97%", borderRadius: "20px", marginRight: "32px" }}>
          <CardContent>
            <Reviews reviews={reviews} />
          </CardContent>
          <Box className="slot-select-box"></Box>
        </Card>
      </div>
    </>
  );
};

export default GroundPage;

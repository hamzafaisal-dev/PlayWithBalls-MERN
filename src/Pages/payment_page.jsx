import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
} from "@mui/material";
import { CreditCard, Event, Lock } from "@mui/icons-material";
import logo from "../Components/Forms/logo-black.png";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import "../Pages/payment_page_style.css";
import axios from "axios";

const PaymentsPage = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const [slots, setSlots] = useState([]);
  const [date, setDate] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [groundName, setGroundName] = useState("");

  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showPaymentInProgress, setShowPaymentInProgress] = useState(true);

  const [paymentStatus, setPaymentStatus] = useState("pending");

  const location = useLocation();

  let cityID,
    groundID = "";

  if (location.state != null) {
    cityID = location.state.cityID;
    groundID = location.state.groundID;
  }

  useEffect(() => {
    if (location.state != null) {
      console.log(location.state);

      setSlots(location.state.slots);
      setDate(location.state.date);
      setSubtotal(location.state.subtotal);
      setGroundName(location.state.groundName);
    }
  }, []);

  useEffect(() => {
    if (paymentStatus === "success") {
      setSlots([]);
    }
  }, [paymentStatus]);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitted!", name, cardNumber, expirationDate, cvv);

    const paymentData = {
      paymentStatus: "pending",
      ground: location.state.groundID,
      creditCardNumber: cardNumber,
      cvv: cvv,
      expirationDate: expirationDate,
      paymentAmount: location.state.subtotal,
    };

    console.log(paymentData);

    const config = {
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    console.log(paymentData);
    const url = `http://localhost:3001/payment`;
    let response = null;

    try {
      response = await axios.post(url, paymentData, config);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert(error.request.data.message);
      } else {
        alert("Error", error.message);
      }
    }

    if (response) {
      setShowPaymentInProgress(false);
      setShowPaymentSuccess(true);
      alert("Payment successful");

      const bookingData = {
        slots: slots,
        date: date,
        groundName: groundName,
        subtotal: subtotal,
      };

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      console.log(bookingData);
      const url = `http://localhost:3001/cities/${cityID}/grounds/${groundID}/bookings`;
      // const response = await axios.post(url, bookingData, config);

      axios
        .post(url, bookingData, config)
        .then((response) => {
          console.log(response);
          if (response) {
            alert("Booking made");
          }
        })
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message);
          } else if (error.request) {
            alert(error.request.data.message);
          } else {
            alert("Error", error.message);
          }
        });
    }
    // Reset the form fields
    setName("");
    setCardNumber("");
    setExpirationDate("");
    setCVV("");
  };

  if (location.state == null || slots.length == 0) {
    console.log(slots);
    return (
      // payment default page
      <>
        {<MUINavbar logo={logo} />}
        {<MUILoggedNavbar logo={logo} />}
        <Typography fontSize={27} textAlign={"center"} marginTop={"330px"}>
          Looks like you haven't made your booking yet<br></br>Head on over to
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
  } else if (slots.length != 0) {
    //setSlots([]);
    // payment in progress page
    return (
      <>
        {showPaymentInProgress && (
          <>
            <MUINavbar logo={logo} />
            <MUILoggedNavbar logo={logo} />
            <div className="container">
              <Container className="payment-div">
                <Typography variant="h5" className="subtotal-text">
                  Total price: Rs.{subtotal}
                </Typography>

                <Divider
                  sx={{
                    backgroundColor: "#2ecc71",
                    height: "6px",
                    marginBottom: "1.5rem",
                    marginTop: "1rem",
                  }}
                />
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2} sx={{ marginBottom: "1.5rem" }}>
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <CreditCard sx={{ marginRight: "0.5rem" }} />
                        Credit Card Number
                      </Typography>
                      <TextField
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                        fullWidth
                        placeholder="1234 1234 1234 1234"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Event sx={{ marginRight: "0.5rem" }} />
                        Expiration Date
                      </Typography>
                      <TextField
                        type="text"
                        id="expirationDate"
                        value={expirationDate}
                        onChange={handleExpirationDateChange}
                        required
                        fullWidth
                        placeholder="MM / YY"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <Lock sx={{ marginRight: "0.5rem" }} />
                        CVV
                      </Typography>
                      <TextField
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={handleCVVChange}
                        required
                        fullWidth
                        placeholder="CVV"
                      />
                    </Grid>
                  </Grid>
                  <FormControlLabel
                    control={<Checkbox required />}
                    label="I agree to store my payment method for future payments"
                  />
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        marginTop: "1rem",
                        backgroundImage:
                          "linear-gradient(to bottom right, #24dc89, #24dc89)",
                        color: "white",
                        borderColor: "black",
                        width: "100%",
                        padding: "12px",
                        borderRadius: "8px",
                      }}
                    >
                      Agree and Pay
                    </Button>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      marginTop: "1rem",
                    }}
                  >
                    By confirming your card payment, you confirm you have read
                    and accept the{" "}
                    <Link href="/terms" target="_blank" rel="noopener">
                      Terms and Conditions
                    </Link>
                    .
                  </Typography>
                </form>
              </Container>
              <Container className="slots-summary-div">
                <Typography variant="h5" className="subtotal-text">
                  Your Order
                </Typography>
                <Divider
                  sx={{
                    backgroundColor: "#2ecc71",
                    height: "6px",
                    marginBottom: "1.5rem",
                    marginTop: "1rem",
                  }}
                />
                <div>
                  {slots.map((slot) => {
                    return (
                      <div class="slots-container" key={slot._id}>
                        <div class="left-side">
                          <div class="line">{groundName}</div>
                          <div class="line">{`${slot.dayOfWeek}, ${date}`}</div>
                          <div class="line">{`${slot.startTime} - ${slot.endTime}`}</div>
                        </div>
                        <div class="right-side">
                          <div class="line slot-rate">{`Rs.${slot.rate}`}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </div>
          </>
        )}
        {showPaymentSuccess && (
          <>
            {<MUINavbar logo={logo} />}
            {<MUILoggedNavbar logo={logo} />}
            <Typography fontSize={27} textAlign={"center"} marginTop={"330px"}>
              Payment succesful!<br></br>Your booking is pending confirmation by
              the ground incharge of ${location.state.groundName}
            </Typography>
          </>
        )}
      </>
    );
  }
};

export default PaymentsPage;

// {location.state.slots.map((slot) => {
//   <div class="slots-container">
//     <div class="left-side">
//       <div class="line">Ground Name</div>
//       <div class="line">{`${slot.dayOfWeek}, ${location.state.date}`}</div>
//       <div class="line">{`${slot.startTime} - ${slot.endTime}`}</div>
//     </div>
//     <div class="right-side">
//       <div class="line">{`Rs.${slot.rate}`}</div>
//     </div>
//   </div>;
// })}

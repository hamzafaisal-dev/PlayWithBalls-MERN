import React, { useState } from "react";
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

const PaymentsPage = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const location = useLocation();
  console.log(location.state);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted!", name, cardNumber, expirationDate, cvv);

    // Reset the form fields
    setName("");
    setCardNumber("");
    setExpirationDate("");
    setCVV("");
  };

  return (
    <>
      {<MUINavbar logo={logo} />}
      {<MUILoggedNavbar logo={logo} />}
      <div className="container">
        <Container className="payment-div">
          <Typography variant="h5" className="subtotal-text">
            Total price: Rs.{location.state.subtotal}
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
              By confirming your card payment, you confirm you have read and
              accept the{" "}
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
            {location.state.slots.map((slot) => {
              return (
                <div class="slots-container" key={slot._id}>
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
        </Container>
      </div>
    </>
  );
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

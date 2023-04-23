import * as React from "react";
import { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Input,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../Forms/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Forms/style.css";
import myImage from "./football-vector.png";
import myImage2 from "./football-vector-2.png";
import logo from "./logo-black.png";
import { SuccessSnackBar, ErrorSnackBar } from "../Snackbars";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/home">
        PlayWithBalls
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export const LoginForm = function LogInSide() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = {
        email: formData.get("email"),
        password: formData.get("password"),
      };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      console.log(data);
      const url = "http://localhost:3001/users/login";
      const response = await axios.post(url, data, config);

      localStorage.setItem("token", response.data.accessToken);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        // Display the error message to the user
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ boxShadow: "none", backgroundColor: "#edf0eb" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <img className="football-logo" src={logo} alt="Logo" />
            </Box>
            <Typography component="h1" variant="h5" sx={{ mt: 2 }}></Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#18204A",
                  borderRadius: "10px",
                  padding: "13px 24px",
                  textTransform: "none",
                  boxShadow: "none",
                  fontSize: "17px",
                  fontWeight: 600,
                  marginTop: "24px",
                  marginBottom: "16px",
                }}
              >
                Log in
              </Button>

              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {"Don't have an account? "}
                    <Link href="/signup" variant="body2">
                      {"Sign Up"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${myImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#edf0eb",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
};

export const SignUpForm = function SignInSide() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        phone: formData.get("phone"),
        role: formData.get("role"),
      };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const url = "http://localhost:3001/users/signup";
      const response = await axios.post(url, data, config);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert(error.request.message);
      } else {
        alert("Error", error.message);
      }
    }
  };
  // for dropdown menu
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          mb={5}
          sx={{
            backgroundImage: `url(${myImage2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "60%",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          mt={-4}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "#edf0eb", boxShadow: "none" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <img className="football-logo" src={logo} alt="Logo" />
            </Box>
            {/* <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
              Create Account
            </Typography> */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControl fullWidth sx={{ mt: 2 }}>
                {selectedValue === "" && (
                  <InputLabel shrink={selectedValue !== ""} id="dropdown-label">
                    Who are you?
                  </InputLabel>
                )}
                <Select
                  labelId="dropdown-label"
                  id="role"
                  name="role"
                  value={selectedValue}
                  onChange={handleChange}
                  sx={{
                    "& .MuiSelect-select:focus": { background: "transparent" },
                  }}
                  required
                >
                  <MenuItem value={"player"}>Player</MenuItem>
                  <MenuItem value={"ground-in-charge"}>
                    Ground Incharge
                  </MenuItem>
                  <MenuItem value={"admin"}>Admin</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: "#18204A",
                  borderRadius: "10px",
                  padding: "13px 24px",
                  textTransform: "none",
                  boxShadow: "none",
                  fontSize: "17px",
                  fontWeight: 600,
                  marginTop: "24px",
                  marginBottom: "16px",
                }}
              >
                Register
              </Button>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        name="termsAndConditions"
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2" color="textSecondary">
                        {"I agree to the "}
                        <Link
                          href="https://youtu.be/dQw4w9WgXcQ"
                          target="_blank"
                          variant="body2"
                          underline="always"
                        >
                          {"Terms and Conditions"}
                        </Link>
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    {"Already have an account? "}
                    <Link href="/login" variant="body2">
                      {"Log In"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export const AboutForm = () => {
  const [profilePicture, setProfilePicture] = useState("");
  const [bio, setBio] = useState("");
  const [position, setPosition] = useState("");

  const handleProfilePictureChange = (e) => {
    try {
      const allowedExtensions = ["jpeg", "jpg", "png"];
      const file = e.target.files[0];
      const extension = file.name.split(".").pop();

      if (allowedExtensions.includes(extension)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setProfilePicture(reader.result);
        };
      } else {
        alert("Invalid file type. Only jpeg, jpg, and png are allowed.");
      }
    } catch (error) {
      console.log("Invalid image format");
    }
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      profilePicture,
      bio,
      position,
    });
  };

  return (
    <Grid item xs={12} sm={8} md={5} elevation={6}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography className="need-more-info" component="h1" variant="h5">
          We need more information, ser!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Profile Picture"
              src={profilePicture}
              sx={{ width: 150, height: 150, mb: 2 }}
            />
            <label htmlFor="profilePicture">
              <Button variant="contained" component="span" sx={{ mt: 1 }}>
                Upload Profile Picture
              </Button>
            </label>
          </Box>
          <Input
            type="file"
            id="profilePicture"
            name="profilePicture"
            autoFocus
            onChange={handleProfilePictureChange}
          />
          <TextField
            margin="normal"
            fullWidth
            placeholder="Tell us a bit about yourself"
            id="bio"
            label="Bio"
            name="bio"
            autoComplete="off"
            multiline
            rows={4}
            onChange={handleBioChange}
            value={bio}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder="Which position do you play at?"
            id="position"
            label="Soccer Position"
            name="position"
            autoComplete="off"
            onChange={handlePositionChange}
            value={position}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

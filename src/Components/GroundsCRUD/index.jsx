import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import axios from "axios";
import "../GroundsCRUD/style.css";

export default function GroundsCRUD() {
  const [groundName, setGroundName] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [information, setInformation] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [status, setStatus] = useState("");
  const [rate, setRate] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [slots, setSlots] = useState([]);

  // checks if any required field is blank. if true, add slots button is disabled else enabled
  useEffect(() => {
    if (groundName !== "" && area !== "" && address !== "" && type !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [groundName, area, address, type]);

  const handleClear = () => {
    setGroundName("");
    setArea("");
    setAddress("");
    setType("");
    setImage(null);
    setStartTime("");
    setEndTime("");
    setStatus("");
    setRate(0);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    } else {
      alert("Please select a valid image file (JPEG, JPG, PNG).");
    }
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleSave = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const data = {
        groundName,
        area,
        address,
        information,
        type,
        // slots: [...slots],
        // images: [
        //   {
        //     image: formData.get("groundImage"),
        //   },
        // ],
      };

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(data);
      const url =
        "http://localhost:3001/cities/642c94aed03f254ea5db3821/areas/641487439a11fb8f182abfe5/grounds";
      const response = await axios.post(url, data, config);

      if (response) {
        alert("Ground created successfully");
        setIsButtonDisabled(true);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert(error.request.data.message);
      } else {
        alert("Error", error.message);
      }
    }
  };

  // const addSlot = () => {
  //   const newSlot = {
  //     startTime,
  //     endTime,
  //     status,
  //     rate,
  //   };

  //   if (newSlot.startTime >= newSlot.endTime) {
  //     alert(
  //       "Invalid slot time. Slot end time should be greater than slot start time"
  //     );
  //   } else if (newSlot.startTime < newSlot.endTime) {
  //     for (let slot of slots) {
  //       if (
  //         slot.startTime === newSlot.startTime &&
  //         slot.endTime === newSlot.endTime
  //       ) {
  //         alert("Slot has already been added");
  //         return;
  //       }
  //     }
  //   }

  //   setSlots([...slots, newSlot]);
  //   // setStartTime("");
  //   // setEndTime("");
  //   // setStatus("");
  //   // setRate("");
  // };

  return (
    <form
      onSubmit={handleSave}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Grid
        container
        spacing={2}
        component="div"
        className="grounds-large-container"
        style={{
          marginLeft: "20px",
        }}
      >
        {/* ground name field */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="groundName"
            label="Ground Name"
            variant="outlined"
            fullWidth
            value={groundName}
            onChange={(e) => setGroundName(e.target.value)}
          />
        </Grid>
        {/* area field */}
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="area-label">Area</InputLabel>
            <Select
              required
              labelId="area-label"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              label="Area"
            >
              <MenuItem value={"Abbas Town"}>Abbas Town</MenuItem>
              <MenuItem value={"Abbasi Shaheed"}>Abbasi Shaheed</MenuItem>
              <MenuItem value={"Abdul Rehman Goth"}>Abdul Rehman Goth</MenuItem>
              <MenuItem value={"Abdullah Goth"}>Abdullah Goth</MenuItem>
              <MenuItem value={"Abidabad"}>Abidabad</MenuItem>
              <MenuItem value={"Abu Zar Ghaffari"}>Abu Zar Ghaffari</MenuItem>
              <MenuItem value={"Abyssinia Lines"}>Abyssinia Lines</MenuItem>
              <MenuItem value={"Afridi Colony"}>Afridi Colony</MenuItem>
              <MenuItem value={"Agra Taj Colony"}>Agra Taj Colony</MenuItem>
              <MenuItem value={"Ahsanabad"}>Ahsanabad</MenuItem>
              <MenuItem value={"Aisha Manzil"}>Aisha Manzil</MenuItem>
              <MenuItem value={"Akhtar Colony"}>Akhtar Colony</MenuItem>
              <MenuItem value={"Al-Falah Society"}>Al-Falah Society</MenuItem>
              <MenuItem value={"Allama Iqbal Colony"}>
                Allama Iqbal Colony
              </MenuItem>
              <MenuItem value={"Ancholi"}>Ancholi</MenuItem>
              <MenuItem value={"Arbian"}>Arbian</MenuItem>
              <MenuItem value={"Azam Basti"}>Azam Basti</MenuItem>
              <MenuItem value={"Azizabad"}>Azizabad</MenuItem>
              <MenuItem value={"Baba and Bhit Islands"}>
                Baba and Bhit Islands
              </MenuItem>
              <MenuItem value={"Baghdadi"}>Baghdadi, Karachi</MenuItem>
              <MenuItem value={"Bahadurabad"}>Bahadurabad</MenuItem>
              <MenuItem value={"Baldia Colony"}>Baldia Colony</MenuItem>
              <MenuItem value={"Baloch Colony"}>Baloch Colony</MenuItem>
              <MenuItem value={"Baloch Goth"}>Baloch Goth</MenuItem>
              <MenuItem value={"Banaras Colony"}>Banaras Colony</MenuItem>
              <MenuItem value={"Bandhani Colony"}>Bandhani Colony</MenuItem>
              <MenuItem value={"Bath Island"}>Bath Island</MenuItem>
              <MenuItem value={"Bhawani Chali"}>Bhawani Chali</MenuItem>
              <MenuItem value={"Bhittai Colony"}>Bhittai Colony</MenuItem>
              <MenuItem value={"Bhutta Village"}>Bhutta Village</MenuItem>
              <MenuItem value={"Bihar Colony"}>Bihar Colony</MenuItem>
              <MenuItem value={"Bilal Colony"}>Bilal Colony</MenuItem>
              <MenuItem value={"Bismillah Chowk"}>Bismillah Chowk</MenuItem>
              <MenuItem value={"Buffer Zone"}>Buffer Zone, Karachi</MenuItem>
              <MenuItem value={"Burmee Colony"}>Burmee Colony</MenuItem>
              <MenuItem value={"Catholic Colony"}>Catholic Colony</MenuItem>
              <MenuItem value={"Cattle Colony"}>Cattle Colony</MenuItem>
              <MenuItem value={"Central Jacob Lines"}>
                Central Jacob Lines
              </MenuItem>
              <MenuItem value={"Chakiwara"}>Chakiwara</MenuItem>
              <MenuItem value={"Chakra Goth"}>Chakra Goth</MenuItem>
              <MenuItem value={"Chanesar Town"}>Chanesar Town</MenuItem>
              <MenuItem value={"Chisti Nagar"}>Chisti Nagar</MenuItem>
              <MenuItem value={"Chittagong Colony"}>Chittagong Colony</MenuItem>
              <MenuItem value={"Cincinnatus Town"}>Cincinnatus Town</MenuItem>
              <MenuItem value={"City Railway Colony"}>
                City Railway Colony
              </MenuItem>
              <MenuItem value={"Civil Lines"}>Civil Lines</MenuItem>
              <MenuItem value={"Clifton"}>Clifton</MenuItem>
              <MenuItem value={"Dak Khana"}>Dak Khana</MenuItem>
              <MenuItem value={"Darakhshan"}>Darakhshan</MenuItem>
              <MenuItem value={"Darsano Chana"}>Darsano Chana</MenuItem>
              <MenuItem value={"Darvesh Goth"}>Darvesh Goth</MenuItem>
              <MenuItem value={"Daryaabad"}>Daryaabad</MenuItem>
              <MenuItem value={"Dastagir"}>Dastagir</MenuItem>
              <MenuItem value={"Dastagir Colony"}>Dastagir Colony</MenuItem>
              <MenuItem value={"Data Nagar"}>Data Nagar</MenuItem>
              <MenuItem value={"DHA Phase 1"}>DHA Phase 1</MenuItem>
              <MenuItem value={"DHA Phase 2"}>DHA Phase 2</MenuItem>
              <MenuItem value={"DHA Phase 3"}>DHA Phase 3</MenuItem>
              <MenuItem value={"DHA Phase 4"}>DHA Phase 4</MenuItem>
              <MenuItem value={"DHA Phase 5"}>DHA Phase 5</MenuItem>
              <MenuItem value={"DHA Phase 6"}>DHA Phase 6</MenuItem>
              <MenuItem value={"DHA Phase 7"}>DHA Phase 7</MenuItem>
              <MenuItem value={"DHA Phase 8"}>DHA Phase 8</MenuItem>
              <MenuItem value={"Defence View"}>Defence View</MenuItem>
              <MenuItem value={"Delhi Colony"}>Delhi Colony</MenuItem>
              <MenuItem value={"DHA City"}>DHA City</MenuItem>
              <MenuItem value={"Dhoraji Colony"}>Dhoraji Colony</MenuItem>
              <MenuItem value={"Drigh Colony"}>Drigh Colony</MenuItem>
              <MenuItem value={"Essa Nagri"}>Essa Nagri</MenuItem>
              <MenuItem value={"Faisal Colony"}>Faisal Colony</MenuItem>
              <MenuItem value={"Farooq-e-Azam"}>Farooq-e-Azam</MenuItem>
              <MenuItem value={"Fatima Jinnah Colony"}>
                Fatima Jinnah Colony
              </MenuItem>
              <MenuItem value={"Federal B. Area"}>Federal B. Area</MenuItem>
              <MenuItem value={"Firdous Colony"}>Firdous Colony</MenuItem>
              <MenuItem value={"Firozabad"}>Firozabad</MenuItem>
              <MenuItem value={"Frontier Colony"}>Frontier Colony</MenuItem>
              <MenuItem value={"Gabo Pat"}>Gabo Pat</MenuItem>
              <MenuItem value={"Gabol Colony"}>Gabol Colony</MenuItem>
              <MenuItem value={"Gadap"}>Gadap</MenuItem>
              <MenuItem value={"Garden East"}>Garden East</MenuItem>
              <MenuItem value={"Garden West"}>Garden West</MenuItem>
              <MenuItem value={"Ghanchi Para"}>Ghanchi Para</MenuItem>
              <MenuItem value={"Gharibabad"}>Gharibabad</MenuItem>
              <MenuItem value={"Ghausia Colony"}>Ghausia Colony</MenuItem>
              <MenuItem value={"Ghaziabad"}>Ghaziabad</MenuItem>
              <MenuItem value={"Gizri"}>Gizri</MenuItem>
              <MenuItem value={"Godhra"}>Godhra</MenuItem>
              <MenuItem value={"Golimar"}>Golimar</MenuItem>
              <MenuItem value={"Green Park City"}>Green Park City</MenuItem>
              <MenuItem value={"Gujrat Colony"}>Gujrat Colony</MenuItem>
              <MenuItem value={"Gulbahar"}>Gulbahar</MenuItem>
              <MenuItem value={"Gulistan-e-Johar"}>Gulistan-e-Johar</MenuItem>
              <MenuItem value={"Gulistan-e-Zafar"}>Gulistan-e-Zafar</MenuItem>
              <MenuItem value={"Gulshan-e-Amna"}>Gulshan-e-Amna</MenuItem>
              <MenuItem value={"Gulshan-e-Ghazi"}>Gulshan-e-Ghazi</MenuItem>
              <MenuItem value={"Gulshan-e-Iqbal"}>Gulshan-e-Iqbal</MenuItem>
              <MenuItem value={"Gulshan-e-Maymar"}>Gulshan-e-Maymar</MenuItem>
              <MenuItem value={"Gulshan-e-Osman"}>Gulshan-e-Osman</MenuItem>
              <MenuItem value={"Gulshan-e-Saeed"}>Gulshan-e-Saeed</MenuItem>
              <MenuItem value={"Gulshan-e-Sheraz"}>Gulshan-e-Sheraz</MenuItem>
              <MenuItem value={"Gulzar Colony"}>Gulzar Colony</MenuItem>
              <MenuItem value={"Gulzar-e-Hijri"}>Gulzar-e-Hijri</MenuItem>
              <MenuItem value={"Haji Ali Goth"}>Haji Ali Goth</MenuItem>
              <MenuItem value={"Haji Camp"}>Haji Camp</MenuItem>
              <MenuItem value={"Hakim Ahsan"}>Hakim Ahsan</MenuItem>
              <MenuItem value={"Hanifabad"}>Hanifabad</MenuItem>
              <MenuItem value={"Haroonabad"}>Haroonabad</MenuItem>
              <MenuItem value={"Haryana Colony"}>Haryana Colony</MenuItem>
              <MenuItem value={"Hawke's Bay Town"}>Hawke's Bay Town</MenuItem>
              <MenuItem value={"Hijrat Colony"}>Hijrat Colony</MenuItem>
              <MenuItem value={"Hundred Quarters"}>Hundred Quarters</MenuItem>
              <MenuItem value={"Hussainabad"}>Hussainabad</MenuItem>
              <MenuItem value={"Hyderabad Colony"}>Hyderabad Colony</MenuItem>
              <MenuItem value={"Hyderi"}>Hyderi</MenuItem>
              <MenuItem value={"Ibrahim Hyderi"}>Ibrahim Hyderi</MenuItem>
              <MenuItem value={"Islam Pura"}>Islam Pura</MenuItem>
              <MenuItem value={"Islamia Colony"}>Islamia Colony</MenuItem>
              <MenuItem value={"Ittehad Town"}>Ittehad Town</MenuItem>
              <MenuItem value={"Jafar-e-Tayyar"}>Jafar-e-Tayyar</MenuItem>
              <MenuItem value={"Jamali Colony"}>Jamali Colony</MenuItem>
              <MenuItem value={"Jamshed Quarters"}>Jamshed Quarters</MenuItem>
              <MenuItem value={"Junaid Nagar"}>Junaid Nagar</MenuItem>
              <MenuItem value={"Kakapir"}>Kakapir</MenuItem>
              <MenuItem value={"Kala Board"}>Kala Board</MenuItem>
              <MenuItem value={"Karachi Creek Marina"}>
                Karachi Creek Marina
              </MenuItem>
              <MenuItem value={"Karimabad"}>Karimabad</MenuItem>
              <MenuItem value={"Keamari"}>Keamari</MenuItem>
              <MenuItem value={"Kehkashan"}>Kehkashan</MenuItem>
              <MenuItem value={"Khamiso Goth"}>Khamiso Goth</MenuItem>
              <MenuItem value={"Khandu Goth"}>Khandu Goth</MenuItem>
              <MenuItem value={"Kharadar"}>Kharadar</MenuItem>
              <MenuItem value={"Khoso Goth"}>Khoso Goth</MenuItem>
              <MenuItem value={"Kokan Colony"}>Kokan Colony</MenuItem>
              <MenuItem value={"Korangi"}>Korangi</MenuItem>
              <MenuItem value={"Korangi J Area"}>Korangi J Area</MenuItem>
              <MenuItem value={"Korangi Sector 33"}>Korangi Sector 33</MenuItem>
              <MenuItem value={"Landhi Colony"}>Landhi Colony</MenuItem>
              <MenuItem value={"Lasbela (Karachi)"}>Lasbela (Karachi)</MenuItem>
              <MenuItem value={"Liaquatabad"}>Liaquatabad</MenuItem>
              <MenuItem value={"Lyari"}>Lyari</MenuItem>
              <MenuItem value="Machar Colony">Machar Colony</MenuItem>
              <MenuItem value="Madina Colony, New Karachi Town">
                Madina Colony, New Karachi Town
              </MenuItem>
              <MenuItem value="Madina Colony, Orangi Town">
                Madina Colony, Orangi Town
              </MenuItem>
              <MenuItem value="Madrasi Para">Madrasi Para</MenuItem>
              <MenuItem value="Mahmudabad">Mahmudabad</MenuItem>
              <MenuItem value="Manghopir">Manghopir</MenuItem>
              <MenuItem value="Manora, Karachi">Manora, Karachi</MenuItem>
              <MenuItem value="Manzoor Colony">Manzoor Colony</MenuItem>
              <MenuItem value="Maripur">Maripur</MenuItem>
              <MenuItem value="Masroor Colony">Masroor Colony</MenuItem>
              <MenuItem value="Maymarabad">Maymarabad</MenuItem>
              <MenuItem value="Mehran Town">Mehran Town</MenuItem>
              <MenuItem value="Metroville">Metroville</MenuItem>
              <MenuItem value="Metroville Colony">Metroville Colony</MenuItem>
              <MenuItem value="Millat Nagar">Millat Nagar</MenuItem>
              <MenuItem value="Mithadar">Mithadar</MenuItem>
              <MenuItem value="Model Colony">Model Colony</MenuItem>
              <MenuItem value="Mohammad Nagar">Mohammad Nagar</MenuItem>
              <MenuItem value="Moinabad">Moinabad</MenuItem>
              <MenuItem value="Mominabad">Mominabad</MenuItem>
              <MenuItem value="Moosa Colony">Moosa Colony</MenuItem>
              <MenuItem value="Moosa Lane">Moosa Lane</MenuItem>
              <MenuItem value="Moria Khan Goth">Moria Khan Goth</MenuItem>
              <MenuItem value="Mubarak Goth">Mubarak Goth</MenuItem>
              <MenuItem value="Muhajir Camp">Muhajir Camp</MenuItem>
              <MenuItem value="Mujahid Colony">Mujahid Colony</MenuItem>
              <MenuItem value="Mujahidabad">Mujahidabad</MenuItem>
              <MenuItem value="Mula Essa Goth">Mula Essa Goth</MenuItem>
              <MenuItem value="Murad Memon Goth">Murad Memon Goth</MenuItem>
              <MenuItem value="Muslim Town">Muslim Town</MenuItem>
              <MenuItem value="Mustafa Taj Colony">Mustafa Taj Colony</MenuItem>
              <MenuItem value="Nai Abadi">Nai Abadi</MenuItem>
              <MenuItem value="Nanak Wara">Nanak Wara</MenuItem>
              <MenuItem value="Narayan Pura">Narayan Pura</MenuItem>
              <MenuItem value="Naseerabad">Naseerabad</MenuItem>
              <MenuItem value="Nasir Colony">Nasir Colony</MenuItem>
              <MenuItem value="Natha Khan Goth">Natha Khan Goth</MenuItem>
              <MenuItem value="Naval Colony">Naval Colony</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* address field */}
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        {/* information field */}
        <Grid item xs={12}>
          <TextField
            id="information"
            label="Information"
            placeholder="Let players know more about this ground"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={information}
            onChange={(e) => setInformation(e.target.value)}
          />
        </Grid>
        {/* type field */}
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              required
              labelId="type-label"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              label="Type"
            >
              <MenuItem value={"grass"}>Grass</MenuItem>
              <MenuItem value={"court"}>Court</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Typography style={{ marginLeft: "16px", marginTop: "15px" }}>
          Select a display picture for this ground
        </Typography>
        {/* ground image button */}
        <Grid item xs={12}>
          <input
            accept=".jpg,.jpeg,.png"
            id="ground-image"
            type="file"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <label htmlFor="ground-image">
            <Button
              variant="outlined"
              component="span"
              fullWidth
              style={{ height: "100%" }}
            >
              Upload ground image
            </Button>
          </label>
        </Grid>
        <Typography style={{ marginLeft: "16px", marginTop: "15px" }}>
          Add slots to this ground
        </Typography>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            component="span"
            style={{ height: "100%" }}
          >
            Add slots
          </Button>
        </Grid>
        {/* <Typography style={{ marginLeft: "16px", marginTop: "15px" }}>
          Add slots to this ground
        </Typography> */}
        {/* <Box
          sx={{
            width: 250,
            height: 40,
            backgroundColor: "#90ee90",
            marginTop: "15px",
            marginLeft: "14px",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ marginLeft: "35px", marginTop: "7px" }}>
            Slot created successfully
          </Typography>
        </Box> */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create ground
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
        </Grid>
      </Grid>
    </form>
  );
}

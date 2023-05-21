import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export const DropdownMenu = function DropdownMenu() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      {selectedValue === "" && (
        <InputLabel shrink={selectedValue !== ""} id="dropdown-label">
          Who are you?
        </InputLabel>
      )}{" "}
      {/*if selected value empty then label rendered, else not rendered*/}
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={selectedValue}
        onChange={handleChange}
        sx={{ "& .MuiSelect-select:focus": { background: "transparent" } }} // makes background of Select component transparent when focused to avoid label appearing over selected value
      >
        <MenuItem value={"player"}>Player</MenuItem>
        <MenuItem value={"ground-incharge"}>Ground Incharge</MenuItem>
        <MenuItem value={"admin"}>Admin</MenuItem>
      </Select>
    </FormControl>
  );
};

export const SlotsDropdown = ({ slots, onChange }) => {
  const [time, setTime] = useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Select value={time} onChange={handleChange} style={{ minWidth: "120px" }}>
      {slots.map((slot) => (
        <MenuItem value={`${slot.startTime}-${slot.endTime}`} key={slot._id}>
          {`${slot.startTime} - ${slot.endTime}`}
        </MenuItem>
      ))}
    </Select>
  );
};

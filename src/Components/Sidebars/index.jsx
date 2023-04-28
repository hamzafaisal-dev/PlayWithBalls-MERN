import React, { useState } from "react";
import "./style.css";
import { FilterList } from "@mui/icons-material";
import axios from "axios";

export default function GroundsSidebar() {
  const [area, setArea] = useState("");
  const [type, setType] = useState("");

  const handleAreaChange = (e) => {
    setArea(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleFilterClick = () => {
    console.log("Area:", area);
    console.log("Type:", type);
    const path = window.location.pathname.substring(1); // removes the leading slash

    axios
      .get(`http://localhost:3001/${path}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="grounds-sidebar">
      <h2 className="sidebar-heading">Filter grounds</h2>
      <div className="sidebar-section">
        <FilterList fontSize="small" />
        <h3 className="sidebar-subheading">
          <FilterList fontSize="small" style={{ marginRight: "5px" }} />
          Filter by area
        </h3>
        <select
          className="sidebar-dropdown"
          value={area}
          onChange={handleAreaChange}
        >
          <option value="">Select an area</option>
          <option value="Gulshan-e-Iqbal">Gulshan-e-Iqbal</option>
          <option value="Defence Phase 1">Defence Phase 1</option>
          <option value="Defence Phase 2">Defence Phase 2</option>
          <option value="Defence Phase 3">Defence Phase 3</option>
        </select>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-subheading">
          <FilterList fontSize="small" style={{ marginRight: "5px" }} />
          Filter by type
        </h3>
        <div className="sidebar-radio-group">
          <label>
            <input
              type="radio"
              value="grass"
              checked={type === "grass"}
              onChange={handleTypeChange}
            />
            Grass
          </label>
          <label>
            <input
              type="radio"
              value="court"
              checked={type === "court"}
              onChange={handleTypeChange}
            />
            Court
          </label>
        </div>
      </div>
      <button className="sidebar-filter-button" onClick={handleFilterClick}>
        Filter
      </button>
    </div>
  );
}

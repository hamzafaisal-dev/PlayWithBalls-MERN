import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import logo from "../Components/Forms/logo-black.png";

const InchargePage = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <MUINavbar logo={logo} />
      <MUILoggedNavbar logo={logo} />
      <Box sx={{ width: "100%", marginTop: "200px", marginLeft: "100px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Pending" />
          <Tab value="two" label="Approved" />
          <Tab value="three" label="Rejected" />
        </Tabs>

        {value === "one" && (
          <div style={{ marginTop: "20px" }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Serial Number</th>
                  <th>Ground Name</th>
                  <th>Booker Name</th>
                  <th>Booking Date</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ground A</td>
                  <td>John Doe</td>
                  <td>2023-06-04</td>
                  <td>$50</td>
                  <td>
                    <button style={{ marginRight: "10px" }}>
                      Approve Booking
                    </button>
                    <button>Reject Booking</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ground B</td>
                  <td>Jane Smith</td>
                  <td>2023-06-05</td>
                  <td>$80</td>
                  <td>
                    <button style={{ marginRight: "10px" }}>
                      Approve Booking
                    </button>
                    <button>Reject Booking</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {value === "two" && <div>Approved content</div>}
        {value === "three" && <div>Rejected content</div>}
      </Box>
    </>
  );
};

export default InchargePage;

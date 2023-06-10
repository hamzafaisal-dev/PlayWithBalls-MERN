import React, { useState } from "react";
import {
  Button,
  Box,
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  TableContainer,
  Typography,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import axios from "axios";

export const UsersTable = ({ usersData, handleOpenModal }) => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDeleteUser = (userID) => {
    console.log(userID);
    axios
      .delete(`http://localhost:3001/users/${userID}`)
      .then((response) => {
        console.log(response);
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
  };

  const players = usersData?.filter((user) => user.role === "player");

  const managers = usersData?.filter((user) => user.role === "manager");

  const admins = usersData?.filter((user) => user.role === "admin");

  return (
    <Box
      sx={{
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: "#F2F2F2",
        width: "800px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          style={{ marginTop: "10px" }}
        >
          <Tab value="one" label="Players" />
          <Tab value="two" label="Managers" />
          <Tab value="three" label="Admins" />
        </Tabs>
        <Typography
          variant="h8"
          sx={{
            marginTop: "10px",
            marginRight: "10px",
            marginLeft: "360px",
            display: "inline-block",
            backgroundColor: "greenyellow",
            padding: "5px 14px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleOpenModal();
          }}
        >
          <Add
            sx={{
              fontSize: 20,
              marginBottom: "5px",
            }}
          />
          ADD USER
        </Typography>
      </div>

      {value === "one" && (
        <div style={{ marginTop: "20px" }}>
          <TableContainer>
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Sr No.
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    User Name
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Email
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Role
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Bookings
                  </TableCell>
                  <TableCell
                    style={{
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {players?.map((user, index) => (
                  <TableRow key={index} style={{ color: "black" }}>
                    <TableCell style={{ textAlign: "left" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.firstName + " " + user.lastName}
                    </TableCell>

                    <TableCell style={{ textAlign: "left" }}>
                      {user.email}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.bookings.length} bookings
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "20px",
                        }}
                      >
                        <Edit
                          sx={{
                            fontSize: 20,
                            marginBottom: "10px",
                            cursor: "pointer",
                            marginRight: "5px",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "5px",
                            },
                          }}
                          onClick={() => {
                            handleOpenModal();
                          }}
                        />
                        <Delete
                          sx={{
                            fontSize: 20,
                            marginBottom: "10px",
                            cursor: "pointer",
                            marginRight: "5px",

                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "5px",
                            },
                          }}
                          onClick={() => {
                            handleDeleteUser(user._id);
                          }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {value === "two" && (
        <div style={{ marginTop: "20px" }}>
          <TableContainer>
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Sr No.
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    User Name
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Email
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Role
                  </TableCell>
                  <TableCell
                    style={{
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {managers?.map((user, index) => (
                  <TableRow key={index} style={{ color: "black" }}>
                    <TableCell style={{ textAlign: "left" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.firstName + " " + user.lastName}
                    </TableCell>

                    <TableCell style={{ textAlign: "left" }}>
                      {user.email}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "20px",
                        }}
                      >
                        <Edit
                          sx={{
                            fontSize: 20,
                            marginBottom: "10px",
                            cursor: "pointer",
                            marginRight: "5px",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "5px",
                            },
                          }}
                        />
                        <Delete
                          sx={{
                            fontSize: 20,
                            marginBottom: "10px",
                            cursor: "pointer",
                            marginRight: "5px",

                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "5px",
                            },
                          }}
                          onClick={() => {
                            handleDeleteUser(user._id);
                          }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {value === "three" && (
        <div style={{ marginTop: "20px" }}>
          <TableContainer>
            <Table style={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Sr No.
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    User Name
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Email
                  </TableCell>
                  <TableCell style={{ color: "black", textAlign: "left" }}>
                    Role
                  </TableCell>
                  <TableCell
                    style={{
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {admins?.map((user, index) => (
                  <TableRow key={index} style={{ color: "black" }}>
                    <TableCell style={{ textAlign: "left" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.firstName + " " + user.lastName}
                    </TableCell>

                    <TableCell style={{ textAlign: "left" }}>
                      {user.email}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </TableCell>
                    <TableCell style={{ textAlign: "left" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "20px",
                        }}
                      >
                        <Edit
                          sx={{
                            fontSize: 20,
                            marginBottom: "10px",
                            cursor: "pointer",
                            marginRight: "5px",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "5px",
                            },
                          }}
                        />
                        <Delete
                          sx={{
                            fontSize: 20,
                            marginBottom: "10px",
                            cursor: "pointer",
                            marginRight: "5px",

                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.1)",
                              borderRadius: "5px",
                            },
                          }}
                          onClick={() => {
                            handleDeleteUser(user._id);
                          }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </Box>
  );
};

export const GroundsTable = ({
  groundsData,
  handleOpenAddGroundModal,
  setViewBookingsModalOpen,
}) => {
  const [showTable, setShowTable] = useState(true);
  const [showSlotForm, setShowSlotForm] = useState(false);

  const handleDeleteGround = (userID) => {
    console.log(userID);
    axios
      .delete(`http://localhost:3001/users/${userID}`)
      .then((response) => {
        console.log(response);
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
  };

  const handleAddSlot = (groundID) => {
    // axios
    //   .post(`http://localhost:3001/grounds/${groundID}/slots`)
    //   .then((response) => {
    //     alert("Slot added succesffuly");
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       alert(error.response.data.message);
    //     } else if (error.request) {
    //       alert(error.request.data.message);
    //     } else {
    //       alert("Errorrf", error.message);
    //     }
    //   });
    setShowTable(false);
    setShowSlotForm(true);
  };

  const handleFormChange = (e) => {};

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShowSlotForm(false);
    setShowTable(true);
  };

  return (
    <>
      {showTable && (
        <Box
          sx={{
            display: "inline-block",
            marginLeft: "20px",
            backgroundColor: "#F2F2F2",
            width: "1000px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h8"
            sx={{
              marginTop: "10px",
              marginRight: "10px",
              marginLeft: "360px",
              display: "inline-block",
              backgroundColor: "greenyellow",
              padding: "5px 14px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleOpenAddGroundModal();
            }}
          >
            <Add
              sx={{
                fontSize: 20,
                marginBottom: "5px",
              }}
            />
            ADD GROUND
          </Typography>

          <div style={{ marginTop: "20px" }}>
            <TableContainer>
              <Table style={{ width: "100%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "black", textAlign: "left" }}>
                      Sr No.
                    </TableCell>
                    <TableCell style={{ color: "black", textAlign: "left" }}>
                      Ground Name
                    </TableCell>
                    <TableCell style={{ color: "black", textAlign: "left" }}>
                      Manager
                    </TableCell>
                    <TableCell style={{ color: "black", textAlign: "left" }}>
                      Address
                    </TableCell>
                    <TableCell style={{ color: "black", textAlign: "left" }}>
                      Type
                    </TableCell>
                    <TableCell style={{ color: "black", textAlign: "left" }}>
                      View Bookings
                    </TableCell>
                    <TableCell
                      style={{
                        color: "black",
                        textAlign: "center",
                      }}
                    >
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {groundsData.map((ground, index) => (
                    <TableRow key={index} style={{ color: "black" }}>
                      <TableCell style={{ textAlign: "left" }}>
                        {index + 1}
                      </TableCell>
                      <TableCell style={{ textAlign: "left" }}>
                        {ground.groundName}
                      </TableCell>
                      <TableCell style={{ textAlign: "left" }}>
                        {ground.inchargeID
                          ? ground.inchargeID.firstName +
                            " " +
                            ground.inchargeID.lastName
                          : "No manager assigned"}
                      </TableCell>
                      <TableCell style={{ textAlign: "left" }}>
                        {ground.address}
                      </TableCell>
                      <TableCell style={{ textAlign: "left" }}>
                        {ground.type.charAt(0).toUpperCase() +
                          ground.type.slice(1)}
                      </TableCell>
                      <TableCell
                        style={{
                          textAlign: "left",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setViewBookingsModalOpen(true);
                          console.log(ground._id);
                        }}
                      >
                        {ground.bookings.length} bookings
                      </TableCell>
                      <TableCell style={{ textAlign: "left" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "20px",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              marginRight: "10px",
                              backgroundColor: "#24DC89",
                            }}
                            onClick={() => {
                              handleAddSlot(ground._id);
                            }}
                          >
                            Add Slots
                          </Button>
                          <Edit
                            sx={{
                              fontSize: 20,
                              marginBottom: "10px",
                              cursor: "pointer",
                              marginRight: "5px",
                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "5px",
                              },
                            }}
                          />
                          <Delete
                            sx={{
                              fontSize: 20,
                              marginBottom: "10px",
                              cursor: "pointer",
                              marginRight: "5px",

                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                borderRadius: "5px",
                              },
                            }}
                            onClick={() => {
                              handleDeleteGround(ground._id);
                            }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      )}
      {showSlotForm && (
        <form onSubmit={handleFormSubmit}>
          <TextField
            name="startTime"
            label="Start Time"
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="endTime"
            label="End Time"
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="rate"
            label="Rate"
            onChange={handleFormChange}
            fullWidth
            required
          />
          <TextField
            name="status"
            label="Status"
            onChange={handleFormChange}
            fullWidth
          />
          <TextField
            name="dayOfWeek"
            label="Day of Week"
            onChange={handleFormChange}
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={() => {
              handleFormSubmit();
            }}
          >
            Add slot
          </Button>
        </form>
      )}
    </>
  );
};

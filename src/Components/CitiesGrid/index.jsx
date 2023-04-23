import React, { useEffect, useState } from "react";
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { UpdateDialog, DeleteDialog } from "../Dialogs";

export default function CitiesGrid({ cities }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [cityToDelete, setCityToDelete] = useState(null);
  const [cityToUpdate, setCityToUpdate] = useState(null);

  const [openDeleteCityDialog, setOpenDeleteCityDialog] = useState(false);
  const [openUpdateCityDialog, setOpenUpdateCityDialog] = useState(false);

  const handleClick = (event, city) => {
    setAnchorEl(event.currentTarget);
    setCityToUpdate(city);
    setCityToDelete(city);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
    setOpenUpdateCityDialog(true);
  };

  const handleDelete = () => {
    handleClose();
    setOpenDeleteCityDialog(true);
  };

  return (
    <Grid
      container
      spacing={2}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Grid item xs={12} md={8}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cities</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cities.map((city) => (
                <TableRow key={city._id}>
                  <TableCell>
                    <a href={`/cities/${city._id}/grounds`}>{city.cityName}</a>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={(event) => handleClick(event, city)}>
                      <Delete />
                    </IconButton>
                    <Menu
                      id="kebab-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {/* <MenuItem onClick={handleEdit}>Edit</MenuItem> */}
                      <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {openDeleteCityDialog && (
        <DeleteDialog
          openDeleteCityDialog={openDeleteCityDialog}
          setOpenDeleteCityDialog={setOpenDeleteCityDialog}
          cityToDelete={cityToDelete}
        />
      )}
      {openUpdateCityDialog && (
        <UpdateDialog
          openUpdateCityDialog={openUpdateCityDialog}
          setOpenUpdateCityDialog={setOpenUpdateCityDialog}
          cityToUpdate={cityToUpdate}
        />
      )}
    </Grid>
  );
}

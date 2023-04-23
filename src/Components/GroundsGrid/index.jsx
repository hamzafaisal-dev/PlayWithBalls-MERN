import React, { useState } from "react";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function GroundsGrid({ grounds }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    // edit row
    handleClose();
  };

  const handleDelete = () => {
    // delete row
    handleClose();
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
                <TableCell>Ground name</TableCell>
                <TableCell>Area</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Ground Incharge</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grounds.map((ground) => (
                <TableRow key={ground._id}>
                  <TableCell>
                    <a href={`/grounds/${ground._id}`}>{ground.groundName}</a>
                  </TableCell>
                  <TableCell>{ground.address}</TableCell>
                  <TableCell>{ground.type}</TableCell>
                  <TableCell>{ground.information}</TableCell>
                  <TableCell>
                    <IconButton onClick={handleClick}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="kebab-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleEdit}>Edit</MenuItem>
                      <MenuItem onClick={handleDelete}>Delete</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
